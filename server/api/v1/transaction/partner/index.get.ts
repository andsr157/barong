import { prisma } from '~/composables/prisma';
import { getServerSession } from '#auth';
import { AuthorizationCheck } from '~/server/helpers';

export default defineEventHandler(async (event) => {
    try {
        const session = await getServerSession(event) as any;
        const query = getQuery(event) as any;
        const status = query.status as string;

        const whereQuery: Record<string, any> = {
            'active': { status_id: 2 },
            'finish': { status_id: { in: [3, 4] } },
        };

        let queryPrisma: any = {
            take: parseInt(query.limit),
            where: {
                AND: [
                    { partner_id: session.user.id },
                    whereQuery[status]
                ]
            },
            include: {
                address: {
                    select: {
                        address_name: true,
                    }
                },
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
                date_created: 'desc'
            }
        };

        if (query.cursor !== '0') {
            queryPrisma['skip'] = 1;
            queryPrisma['cursor'] = { id: parseInt(query.cursor) };
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


        if (AuthorizationCheck(session, transactions[0].partner_id.toString()).status !== 200) {
            return AuthorizationCheck(session, transactions[0].partner_id.toString());
        }

        const formattedTransactions = transactions.map((data: any) => {
            const status = { id: data.status.id, ...data.status };
            return {
                id: data.id,
                user: data.user,
                address: data.address.address_name,
                detailSampah: data.transaction_detail.map((detail: any) => ({
                    category: detail.trash.category.name,
                })),
                status: status,
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
        return { error: 'Internal server error', status: 500 };
    }
});
