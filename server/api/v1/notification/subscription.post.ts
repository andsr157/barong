import { prisma } from "~/composables/prisma"
import { getServerSession } from "#auth"

export default defineEventHandler(async (event) => {
    try {
        const session = await getServerSession(event) as any
        const body = await readBody(event)
        const subscription = body

        if (!session?.user?.id) {
            throw new Error('User not authenticated');
        }

        const user_id = session.user.id;

        const existingSubscription = await prisma.pushSubscription.findFirst({
            where: {
                user_id
            },
        });

        if (existingSubscription) {
            await prisma.pushSubscription.update({
                where: { id: existingSubscription.id },
                data: { subscription, updatedAt: new Date() },
            });
        } else {
            await prisma.pushSubscription.create({
                data: {
                    user_id,
                    subscription,
                },
            });
        }

        return { success: true };
    } catch (error: any) {
        console.error('Error saving subscription:', error);
        return { success: false, error: error.message };
    }
})