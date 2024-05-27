import { prisma } from "~/composables/prisma"
import { getServerSession } from "#auth";

export default defineEventHandler(async (event) => {
    try {
        const session = await getServerSession(event) as any

        if (!session) {
            throw createError({
                statusCode: 403,
                statusMessage: 'Unauthorized'
            })
        }

        const res = await prisma.user_notification.updateMany({
            where: {
                user_id: session?.user?.id
            },
            data: {
                isRead: true
            }
        });

        if (!res) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Bad Request'
            })
        }
        return { data: res, status: 200 };
    } catch (error: any) {
        console.error('Error saving notification:', error);
        return { error: error, status: 500 };
    }
})