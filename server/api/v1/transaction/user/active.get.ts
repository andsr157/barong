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
                address: {
                    select: {
                        address_name: true
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

            return {
                id: data.id,
                chats_id: data.chats_id,
                user: data.user,
                pengepul: data.partner,
                address: data.address.address_name,
                detailSampah: data.transaction_detail.map((detail: any) => ({
                    category: detail.trash.category.name,
                    weight: detail.weight,
                })),

                status: status,

            };
        });
        return { data: formattedTransactions, status: 200 };
    } catch (error) {
        console.error('Error fetching transaction data:', error);
        return { data: null, error: 'Internal server error', status: 500 };
    }
});
