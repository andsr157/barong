import axios from 'axios'
interface Notification {
    id: string,
    title: string,
    description: string,
    link: string
}
const defaultTimeout = 5000

export const useNotificationStore = defineStore('notification', {
    state: (): { notifications: Notification[] } => ({
        notifications: []
    }),
    actions: {
        updateNotificationState(payload: any) {
            const { id, title, description, link } = payload;
            this.notifications.push({
                id,
                title,
                description,
                link
            })

            setTimeout(() => {
                this.notifications = this.notifications.filter((t) => t.id !== id);
            }, defaultTimeout);
        },

        async sendNotification(payload: any) {
            try {
                const res = await axios.post('/api/v1/notification/sendApp', payload)
                if (res.data && res.data.status === 200) {
                    return { success: true }
                } else {
                    return { success: false }
                }
            } catch (error) {
                console.log(error)
                return { success: false }
            }
        }
    }
})