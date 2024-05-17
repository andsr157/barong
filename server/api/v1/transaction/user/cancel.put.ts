import { prisma } from '~/composables/prisma';

export default defineEventHandler(async (event) => {

    try {
        const body = await readBody(event)

        const res = await prisma.transaction.update({
            where: {
                id: body.id
            },
            data: {
                status_id: 'STS5',
                partner_id: null,
            }
        })
        if (!res) {
            throw createError({
                statusCode: 400,
                statusMessage: 'data tidak ditemukan'
            })
        }
        const transaction_status = await prisma.status.findUnique({
            where: {
                id: res.status_id
            },
            select: {
                name: true,
                label: true,
                status: true
            }
        })
        return { data: transaction_status, status: 200 }

    } catch (error) {
        console.error('Error fetching transaction data:', error);
        return { error: error, status: 500 };
    }
});
