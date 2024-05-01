import { prisma } from '~/composables/prisma';
import { getServerSession } from '#auth';
import { AuthorizationCheck } from '~/server/helpers';

export default defineEventHandler(async (event) => {
    try {
        const session = await getServerSession(event) as any;
        const query = getQuery(event) as any;
        const status = query.status as string;

        const whereQuery: Record<string, any> = {
            'active': { status_id: { in: [1, 2] } },
            'finish': { status_id: { in: [3, 4] } },
            'canceled': { status_id: 5 }
        };

        let queryPrisma: any = {
            take: parseInt(query.limit),
            where: {
                AND: [
                    { user_id: session.user.id },
                    whereQuery[status]
                ]
            },
            include: {
                partner: {
                    select: {
                        name: true,
                        avatar: true
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
                        { user_id: session.user.id },
                        whereQuery[status]
                    ]
                }
            }),
            prisma.transaction.findMany(queryPrisma)
        ]);


        if (AuthorizationCheck(session, transactions[0].user_id.toString()).status !== 200) {
            return AuthorizationCheck(session, transactions[0].user_id.toString());
        }

        const formattedTransactions = transactions.map((data: any) => {
            const status = { id: data.status.id, ...data.status };
            return {
                id: data.id,
                pengepul: data.partner,
                detailSampah: data.transaction_detail.map((detail: any) => ({
                    category: detail.trash.category.name,
                })),
                time: data.update_at,
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
