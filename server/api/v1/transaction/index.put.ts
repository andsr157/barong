import { prisma } from '~/composables/prisma'

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log('ini body', body.transaction_detail)
    try {
        const updatedTransaction = await prisma.transaction.update({
            where: {
                id: body.transaction.id
            },
            data: {
                user_id: body.transaction.user_id,
                address: JSON.stringify(body.transaction.address),
                image: body.transaction.image,
                status_id: body.transaction.status_id,
                note: body.transaction.note,
                update_at: new Date()
            },
        });

        const detailData = {
            transaction_id: body.transaction.id,
            price: 0,
        }

        const updatedTransactionDetails = await Promise.all(
            body.transaction_detail.map(async (detail: any) => {
                const { id: trashId, ...resData } = detail
                const { id, weight } = detail;

                // Cek apakah detail transaksi sudah ada berdasarkan ID
                const existingTransactionDetail = await prisma.transaction_detail.findFirst({
                    where: {
                        id: id
                    },
                });

                if (!existingTransactionDetail) {
                    // Jika detail transaksi belum ada, buat yang baru
                    return await prisma.transaction_detail.create({
                        data: { ...resData, ...detailData }
                    });
                } else {
                    // Jika sudah ada, perbarui detail transaksi yang ada
                    return await prisma.transaction_detail.update({
                        where: { id: id },
                        data: {
                            weight,
                        },
                    });
                }

            })
        );

        // Mengembalikan respons yang sesuai dengan permintaan
        return {
            data: {
                transaction: updatedTransaction,
                transaction_detail: updatedTransactionDetails,
            },
            status: 200
        };
    } catch (error) {
        // Menangani kesalahan yang mungkin terjadi selama pembaruan transaksi
        console.error('Error updating transaction:', error);
        throw new Error('Error updating transaction');
    }
});
