import { prisma } from '~/composables/prisma';
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {

    try {
        const transaction_id = getRouterParam(event, 'id') ?? '';
        // const session = await getServerSession(event) as any
        // const partnerId = session.user.id
        const body = await readBody(event)

        const res = await prisma.transaction.update({
            where: {
                id: transaction_id
            },
            data: {
                status_id: 'STS3',
                total: body.total
            }
        })

        const updatedTransactionDetails = await Promise.all(
            body.trash.map(async (detail: any) => {
                const { id, weight, price } = detail;

                return await prisma.transaction_detail.update({
                    where: { id: id },
                    data: {
                        weight,
                        price: parseInt(price)
                    },
                });
            })
        );

        if (updatedTransactionDetails) {
            return {
                status: 200
            }
        }
    } catch (error) {
        console.error('Error fetching transaction data:', error);
        return { error: 'Internal server error', status: 500 };
    }
});
