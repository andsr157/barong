// Import Prisma Client
import { prisma } from '~/composables/prisma';
import { getServerSession } from '#auth'
import { AuthorizationCheck } from '~/server/helpers'

// Definisikan event handler untuk API
export default defineEventHandler(async (event) => {

    try {
        // Ambil user_id dari parameter rute
        const id = await getRouterParam(event, 'id') ?? '';

        const session = await getServerSession(event) as any

        // Dapatkan data transaksi dari Prisma
        const transactions = await prisma.transaction.findMany({
            where: {
                id: parseInt(id),
            },
            include: {
                // users: true,
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
        console.log(transactions[0])
        if (transactions[0].partner_id !== null) {

            const partnerData = await prisma.users.findUnique({

                where: {
                    id: transactions[0].partner_id

                },
                select: {
                    id: true,
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


        const { id: status_id, ...status } = transactions[0].status


        const addressData = JSON.parse(transactions[0].address)

        // Format data transaksi sesuai dengan struktur yang diinginkan
        const formattedTransactions = {
            id: transactions[0].id,
            chats_id: transactions[0].chats_id,
            user: user,
            pengepul: partner, // Informasi pengepul belum tersedia
            address: {
                label: addressData.label,
                name: addressData.owner_name,
                address: addressData.address_name,
                telp: addressData.owner_telp,
                detail: addressData.detail,
                latitude: addressData.latitude,
                longituded: addressData.longitude,
            },
            trashImage: transactions[0].image, // Gambar sampah (placeholder)
            detailSampah: transactions[0].transaction_detail.map((detail) => ({
                id: detail.id,
                trash_id: detail.trash_id,
                category: detail.trash.category.name,
                subcategory: detail.trash.name, // Subkategori (jika ada)
                minPrice: detail.trash.minPrice,
                maxPrice: detail.trash.maxPrice,
                weight: detail.weight,
                finalPrice: detail.price ?? 0, // Harga akhir (misalnya setelah perhitungan)
            })),
            totalPrice: transactions[0].total,
            servicePrice: (transactions[0].total ?? 0) * 10 / 100,
            finalTotalPrice: (transactions[0].total ?? 0) - ((transactions[0].total ?? 0) * 10 / 100),
            status: status,
            review: {
                rate: transactions[0].partner_rate,
                ulasan: transactions[0].partner_review,
            },
            note: transactions[0].note,
        };

        // Kembalikan respons dengan data transaksi yang diformat
        return { data: formattedTransactions, status: 200 };
    } catch (error) {
        console.error('Error fetching transaction data:', error);
        // Kembalikan respons dengan pesan error
        return { error: 'Internal server error', status: 500 };
    }
});
