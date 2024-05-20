import { prisma } from "~/composables/prisma";
import webPush from "web-push"

webPush.setVapidDetails(
    'mailto:barong.surakarta@gmail.com',
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
);


export default defineEventHandler(async (event) => {

    // const body = await readBody(event)
    // const userId = body.userId; // User ID yang akan dikirimi notifikasi
    const payload = JSON.stringify({
        title: 'Transaksi test',
        body: 'Anda memiliki transaksi',
    });

    const subscription = await prisma.pushSubscription.findUnique({
        where: {
            user_id: 'clwemrbr10002iaho2qarwaxo'
        },
        select: {
            subscription: true
        }
    })


    if (!subscription) {
        return { error: 'subscription not found', status: 400 };
    }

    const sendNotification = async (subscription: any) => {
        try {
            await webPush.sendNotification(subscription, payload);
        } catch (error) {
            console.error('Error sending notification:', error);
        }
    };


    await sendNotification(subscription.subscription);

    return { success: true };
})