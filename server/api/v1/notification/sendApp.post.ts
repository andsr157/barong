import { prisma } from "~/composables/prisma"
export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)

        const res = await prisma.user_notification.create({
            data: {
                user_id: body.user_id,
                notificationId: parseInt(body.notificationId),
                link: body.link,
                mode: "IN_APP",
                isRead: false
            },
        });
        return { data: res, status: 200 };
    } catch (error: any) {
        console.error('Error saving subscription:', error);
        return { error: error.message, status: 500 };
    }
})