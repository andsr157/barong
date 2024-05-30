import { prisma } from '~/composables/prisma';
import { getServerSession } from '#auth';
import { Mutex } from 'async-mutex';

const mutex = new Mutex();

export default defineEventHandler(async (event) => {
    const session = await getServerSession(event) as any;
    const transaction_id = getRouterParam(event, 'id') ?? '';
    const body = await readBody(event);

    try {
        const result = await mutex.runExclusive(async () => {
            const transaction = await prisma.transaction.findUniqueOrThrow({
                where: {
                    id: transaction_id
                },
            });

            if (transaction.partner_id !== null && transaction.partner_id !== session.user.id) {
                throw createError({
                    statusCode: 403,
                    statusMessage: 'forbidden'
                });
            }

            const res = await prisma.transaction.update({
                where: {
                    id: transaction_id
                },
                data: {
                    status_id: body.status_id,
                    partner_id: body.partner_id,
                }
            });

            const transaction_status = await prisma.status.findUnique({
                where: {
                    id: res.status_id
                }
            });

            const { id: statusId, ...status } = transaction_status ?? { id: undefined, name: '', label: '', status: '' };

            return {
                transaction: res,
                status: status
            };
        });

        return { data: result, status: 200 };
    } catch (error) {
        console.error('Error updating transaction:', error);
        return { error, status: 500 };
    }
});
