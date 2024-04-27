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
                user_id: session.user.id,
                OR: [
                    { status_id: 1 },
                    { status_id: 2 }
                ]
            },
            include: {
                // users: true,
                address: true,
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
            return AuthorizationCheck(session, transactions[0].user_id.toString());
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

            return {
                id: data.id,
                chats_id: data.chats_id,
                user: user,
                pengepul: partner,
                address: {
                    label: data.address.label,
                    name: data.address.owner_name,
                    telp: data.address.owner_telp,
                    detail: data.address.detail,
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


        // Kembalikan respons dengan data transaksi yang diformat
        return { data: formattedTransactions, status: 200 };
    } catch (error) {
        console.error('Error fetching transaction data:', error);
        // Kembalikan respons dengan pesan error
        return { data: null, error: 'Internal server error', status: 500 };
    }
});
