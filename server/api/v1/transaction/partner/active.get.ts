// Import Prisma Client
import { prisma } from '~/composables/prisma';
import { getServerSession } from '#auth'
import { AuthorizationCheck } from '~/server/helpers'

// Definisikan event handler untuk API
export default defineEventHandler(async (event) => {
    try {
        // Ambil user_id dari parameter rute
        const session = await getServerSession(event) as any
        // Dapatkan data transaksi dari Prisma
        const transactions = await prisma.transaction.findMany({
            where: {
                partner_id: session.user.id,
                status_id: 'STS2'
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
        });


        if (transactions.length === 0) {
            return { data: null, status: 400 };
        }

        if (session) {
            AuthorizationCheck(session, transactions[0].partner_id ?? '');
        }

        const user = await prisma.users.findUnique({
            where: {
                id: transactions[0].user_id
            },
            select: {
                name: true,
                telp: true,
            }
        });

        // Format data return
        const formattedTransactions = transactions.map((data: any) => {
            const status = { id: data.status.id, ...data.status };
            const addressData = JSON.parse(data.address)
            return {
                id: data.id,
                user: data.user,
                address: addressData.address_name,
                detailSampah: data.transaction_detail.map((detail: any) => ({
                    category: detail.trash.category.name,
                    weight: detail.weight,
                })),
                status: status,
                time: data.updated_at
            };
        });

        return { data: formattedTransactions, status: 200 };

    } catch (error) {
        console.error('Error fetching transaction data:', error);
        return { data: null, error: error, status: 500 };
    }
});
