import { prisma } from "~/composables/prisma";
import webPush from "web-push";

webPush.setVapidDetails(
    'mailto:barong.surakarta@gmail.com',
    process.env.VAPID_PUBLIC_KEY!,
    process.env.VAPID_PRIVATE_KEY!
);

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const payload = JSON.stringify({
        title: 'Transaksi test',
        body: 'Anda memiliki transaksi',
    });

    const subscriptions = await prisma.pushSubscription.findMany({
        where: {
            user_id: body.user_id
        },
        select: {
            subscription: true
        }
    });

    if (!subscriptions.length) {
        return { error: 'No subscriptions found', status: 400 };
    }

    // Fungsi untuk mengirim notifikasi ke satu langganan
    const sendNotification = async (subscription: any) => {
        try {
            await webPush.sendNotification(subscription, payload);
        } catch (error) {
            console.error('Error sending notification:', error);
        }
    };

    const sendNotificationsToAll = async () => {
        for (const sub of subscriptions) {
            await sendNotification(sub.subscription);
        }
    };

    await sendNotificationsToAll();

    return { success: true };
});
