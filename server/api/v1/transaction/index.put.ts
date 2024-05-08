import { prisma } from '~/composables/prisma'
import { getSeparateNumber } from '~/server/helpers';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
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
                updated_at: new Date()
            },
        });


        const detailData = {
            transaction_id: body.transaction.id,
            price: 0,
        }

        const lastDetailId = await prisma.transaction_detail.findFirst({
            select: {
                id: true
            },
            orderBy: {
                id: 'desc'
            }
        })

        if (!lastDetailId) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Unauthorized'
            })
        }

        let countDetail = getSeparateNumber(lastDetailId.id)

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
                    countDetail += 1
                    return await prisma.transaction_detail.create({
                        data: { id: `TRD${countDetail}`, ...resData, ...detailData }
                    });
                } else {
                    return await prisma.transaction_detail.update({
                        where: { id: id },
                        data: {
                            weight,
                        },
                    });
                }

            })
        );

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
