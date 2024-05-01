// Import Prisma Client
import { prisma } from '~/composables/prisma';
import { getServerSession } from '#auth'
import { AuthorizationCheck } from '~/server/helpers'

export default defineEventHandler(async (event) => {

    try {
        const session = await getServerSession(event) as any
        const transactions = await prisma.transaction.findMany({
            where: {
                user_id: session.user.id,
                OR: [
                    { status_id: 1 },
                    { status_id: 2 }
                ]
            },
            include: {
                user: true,
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
        });

        if (AuthorizationCheck(session, transactions[0].user_id.toString()).status !== 200) {
            return AuthorizationCheck(session, transactions[0].user_id.toString());
        }

        const formattedTransactions = transactions.map((data: any) => {
            const status = { id: data.status.id, ...data.status };
            const addressData = JSON.parse(data.address)
            return {
                id: data.id,
                pengepul: data.partner,
                detailSampah: data.transaction_detail.map((detail: any) => ({
                    category: detail.trash.category.name,
                    weight: detail.weight,
                })),
                time: data.update_at,
                status: status,

            };
        });
        return { data: formattedTransactions, status: 200 };
    } catch (error) {
        console.error('Error fetching transaction data:', error);
        return { data: null, error: 'Internal server error', status: 500 };
    }
});
