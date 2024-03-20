import { defineStore } from "pinia";
export type ToastStatus = 'warning' | 'success' | 'error'

interface BrgToast {
    text: string,
    status: ToastStatus
    id: number
}

type ToastPayload = { timeout?: number, text: string }

const defaultTimeout = 2000;

const createToast = (text: string, status: ToastStatus): BrgToast => ({
    text,
    status,
    id: Math.random() * 1000,
});

export const useToastStore = defineStore('Toast-store', {
    state: (): { toasts: BrgToast[] } => ({
        toasts: [],
    }),

    actions: {
        updateToastState(payload: ToastPayload, status: ToastStatus) {
            const { text, timeout } = payload;

            const toast = createToast(text, status);

            this.toasts.push(toast);

            setTimeout(() => {
                this.toasts = this.toasts.filter((t) => t.id !== toast.id);
            }, timeout ?? defaultTimeout);
        },

        success(payload: ToastPayload) {
            this.updateToastState(payload, 'success')
        },

        warning(payload: ToastPayload) {
            this.updateToastState(payload, "warning");
        },

        error(payload: ToastPayload) {
            this.updateToastState(payload, "error");
        },
    }
})