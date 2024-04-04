import { prisma } from '~/composables/prisma'

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    // return body

    try {
        // const transactionId = body.transaction.id;

        const updatedTransaction = await prisma.transaction.update({
            where: {
                id: body.transaction.id
            },
            data: {
                user_id: body.transaction.user_id,
                address_id: body.transaction.address_id,
                image: body.transaction.image,
                status_id: body.transaction.status_id,
                note: body.transaction.note,
            },
        });

        // return updatedTransaction

        const updatedTransactionDetails = await Promise.all(
            body.transaction_detail.map(async (detail: any) => {
                const { trash_id, weight } = detail;

                // Cek apakah trash_id ada dalam database
                const existingTrash = await prisma.trash.findUnique({
                    where: {
                        id: trash_id,
                    },
                });

                if (!existingTrash) {
                    throw new Error(`Trash with trash_id ${trash_id} does not exist.`);
                }

                const existingTransactionDetail = await prisma.transaction_detail.findFirst({
                    where: {
                        trash_id: trash_id,
                    },
                });

                if (!existingTransactionDetail) {
                    throw new Error(`Transaction detail with trash_id ${trash_id} does not exist.`);
                }

                // Mengupdate data detail transaksi
                return prisma.transaction_detail.update({
                    where: { id: existingTransactionDetail.id },
                    data: {
                        weight,
                    },
                });
            })
        );


        // return updatedTransactionDetails

        return {
            transaction: updatedTransaction,
            transaction_detail: updatedTransactionDetails,
        };
    } catch (error) {
        console.error('Error updating transaction:', error);
        throw new Error('Error updating transaction');
    }
});
