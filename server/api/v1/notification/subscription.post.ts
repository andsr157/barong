import { prisma } from "~/composables/prisma";
import { getServerSession } from "#auth";

export default defineEventHandler(async (event) => {
    try {
        const session = await getServerSession(event) as any;
        const body = await readBody(event);
        const subscription = body;

        if (!session?.user?.id) {
            throw new Error('User not authenticated');
        }

        const user_id = session.user.id;
        const endpoint = subscription.endpoint;

        // Check if the subscription already exists
        const existingSubscription = await prisma.pushSubscription.findFirst({
            where: {
                user_id,
                endpoint
            },
        });

        if (existingSubscription) {
            // Update existing subscription
            await prisma.pushSubscription.update({
                where: { id: existingSubscription.id },
                data: { subscription, updatedAt: new Date() },
            });
        } else {
            // Create new subscription
            await prisma.pushSubscription.create({
                data: {
                    user_id,
                    subscription,
                    endpoint,
                },
            });
        }

        return { success: true };
    } catch (error: any) {
        console.error('Error saving subscription:', error);
        return { success: false, error: error.message };
    }
});
