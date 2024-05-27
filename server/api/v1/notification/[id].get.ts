import { prisma } from "~/composables/prisma"

export default defineEventHandler(async (event) => {
    try {
        const notificationId = getRouterParam(event, 'id') ?? ''

        const res = await prisma.notification.findUnique({
            where: {
                id: parseInt(notificationId)
            },
            select: {
                title: true,
                description: true
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