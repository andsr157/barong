import { prisma } from '~/composables/prisma';
import { getServerSession } from '#auth';
import { AuthorizationCheck } from '~/server/helpers';

export default defineEventHandler(async (event) => {
    try {
        const session = await getServerSession(event) as any;
        const query = getQuery(event) as any;
        const status = query.status as string;

        const whereQuery: Record<string, any> = {
            'active': { status_id: 'STS2' },
            'finish': { status_id: { in: ['STS3', 'STS4'] } },
        };

        let latestCursor
        if (query.cursor !== '0') {
            latestCursor = new Date(query.cursor)
        }

        let queryPrisma: any = {
            take: parseInt(query.limit),
            where: {
                AND: [
                    { partner_id: session.user.id },
                    whereQuery[status]
                ]
            },
            include: {
                user: {
                    select: {
                        name: true,
                        telp: true
                    }
                },
                transaction_detail: {
                    select: {
                        trash: {
                            select: {
                                category: true
                            }
                        }
                    }
                },
                status: true,
            },
            orderBy: {
                updated_at: 'desc'
            }
        };

        if (query.cursor !== '0') {
            queryPrisma['skip'] = 1;
            queryPrisma['cursor'] = { updated_at: latestCursor };
        }

        const [total_record, transactions]: [any, any] = await Promise.all([
            prisma.transaction.count({
                where: {
                    AND: [
                        { partner_id: session.user.id },
                        whereQuery[status]
                    ]
                }
            }),
            prisma.transaction.findMany(queryPrisma)
        ]);

        if (!(transactions.length)) {
            return { data: null, status: 400 };
        }

        if (session) {
            AuthorizationCheck(session, transactions[0].partner_id.toString());
        }

        const formattedTransactions = transactions.map((data: any) => {
            const status = { id: data.status.id, ...data.status };
            const addressData = JSON.parse(data.address)
            return {
                id: data.id,
                user: data.user,
                address: addressData.address_name,
                detailSampah: data.transaction_detail.map((detail: any) => ({
                    category: detail.trash.category.name,
                })),
                status: status,
                time: data.updated_at
            };
        });

        const pagination = {
            total_record,
            total_pages: Math.ceil(total_record / parseInt(query.limit)),
            next: transactions.length === parseInt(query.limit) ? `/api/v1/transaction/user?status=${status}&limit=${query.limit}&cursor=${transactions[transactions.length - 1].id}` : null,
            previous: query.cursor ? `/api/v1/transaction/user?status=${status}&limit=${-query.limit}` : null,
        };

        return { data: formattedTransactions, pagination, status: 200 };
    } catch (error) {
        console.error('Error fetching transaction data:', error);
        return { data: null, error: 'Internal server error', status: 500 };
    }
});
