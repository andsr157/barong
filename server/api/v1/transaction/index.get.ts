// Import Prisma Client
import { prisma } from '~/composables/prisma';
import { getServerSession } from '#auth'
import { AuthorizationCheck } from '~/server/helpers'

// Definisikan event handler untuk API
export default defineEventHandler(async (event) => {

    try {
        const session = await getServerSession(event) as any
        const transactions = await prisma.transaction.findMany({
            include: {
                transaction_detail: {
                    include: {
                        trash: {
                            include: {
                                category: true,
                            }
                        },
                    },
                },
                status: true,
            },
        });

        if (AuthorizationCheck(session, transactions[0].user_id.toString()).status !== 200) {
            if (session.user.role !== 'partner') {
                return AuthorizationCheck(session, transactions[0].user_id.toString());
            }
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

        let partner

        if (transactions[0].partner_id !== null) {

            const partnerData = await prisma.users.findUnique({

                where: {
                    id: transactions[0].partner_id

                },
                select: {
                    name: true,
                    telp: true,
                    avatar: true,

                }
            });
            const rate = await prisma.transaction.aggregate({
                _avg: {
                    partner_rate: true
                },
                where: {
                    partner_id: transactions[0].partner_id
                }
            })

            partner = { ...partnerData, rating: rate._avg.partner_rate }
        } else {
            partner = {}
        }
        // Format data transaksi sesuai dengan struktur yang diinginkan
        const formattedTransactions = transactions.map((data: any) => {
            const status = { id: data.status.id, ...data.status };
            const addressData = JSON.parse(data.address)
            return {
                id: data.id,
                chats_id: data.chats_id,
                user: user,
                pengepul: partner,
                address: {
                    label: addressData.label,
                    address: addressData.address_name,
                    name: addressData.owner_name,
                    telp: addressData.owner_telp,
                    detail: addressData.detail,
                },
                trashImage: '/assets/dummy-trash.png',
                detailSampah: data.transaction_detail.map((detail: any) => ({
                    id: detail.id,
                    category: detail.trash.category.name,
                    subcategory: detail.trash.name,
                    minPrice: detail.trash.minPrice,
                    maxPrice: detail.trash.maxPrice,
                    weight: detail.weight,
                    finalPrice: 0,
                })),
                totalPrice: data.total,
                servicePrice: (data.total ?? 0) * 10 / 100,
                finalTotalPrice: (data.total ?? 0) - ((data.total ?? 0) * 10 / 100),
                status: status,
                review: {
                    rate: data.partner_rate,
                    ulasan: data.partner_review,
                },
                note: data.note,
            };
        });

        return { data: formattedTransactions, status: 200 };
    } catch (error) {
        console.error('Error fetching transaction data:', error);
        return { error: 'Internal server error', status: 500 };
    }
});
