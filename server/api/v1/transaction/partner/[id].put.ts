import { prisma } from '~/composables/prisma';

export default defineEventHandler(async (event) => {

    try {
        const transaction_id = getRouterParam(event, 'id') ?? '';
        const body = await readBody(event)

        const res = await prisma.transaction.update({
            where: {
                id: parseInt(transaction_id)
            },
            data: {
                status_id: body.status_id,
                partner_id: body.partner_id,
            }
        })

        const transaction_status = await prisma.status.findUnique({
            where: {
                id: res.status_id
            }
        })

        const { id: statusId, ...status } = transaction_status ?? { id: undefined, name: '', label: '', status: '' };

        if (res) {
            return {
                data: {
                    transaction: res,
                    status: status
                }, status: 200

            }
        }

    } catch (error) {
        console.error('Error fetching transaction data:', error);
        return { error: 'Internal server error', status: 500 };
    }
});
