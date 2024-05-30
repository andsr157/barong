import { prisma } from '~/composables/prisma';
import { getServerSession } from '#auth';
import { AuthorizationCheck } from '~/server/helpers';

export default defineEventHandler(async (event) => {
    try {
        const session = await getServerSession(event) as any;
        const query = getQuery(event) as any;
        const status = query.status as string;

        let latestCursor
        if (query.cursor !== '0') {
            latestCursor = new Date(query.cursor)
        }

        let queryPrisma: any = {
            take: parseInt(query.limit),
            where: {
                user_id: session.user.id
            },
            include: {
                notification: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        };

        if (query.cursor !== '0') {
            queryPrisma['skip'] = 1;
            queryPrisma['cursor'] = { createdAt: latestCursor };
        }

        const [total_record, notifications]: [any, any] = await Promise.all([
            prisma.user_notification.count({
                where: { user_id: session.user.id }
            }),
            prisma.user_notification.findMany(queryPrisma)
        ]);

        if (!(notifications.length)) {
            return { data: null, status: 400 };
        }

        if (session) {
            AuthorizationCheck(session, notifications[0].user_id);
        }

        const pagination = {
            total_record,
            total_pages: Math.ceil(total_record / parseInt(query.limit)),
            next: notifications.length === parseInt(query.limit) ? `/api/v1/notification/limit=1&cursor=${notifications[notifications.length - 1].createdAt}` : null,
            previous: query.cursor ? `/api/v1/transaction/user?limit=${-query.limit}` : null,
        };

        return { data: notifications, pagination, status: 200 };
    } catch (error) {
        console.error('Error fetching transaction data:', error);
        return { error: error, status: 500 };
    }
});
