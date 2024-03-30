import { defineStore } from 'pinia'
import { type TransactionData, type TransactionDetail } from '~/types/transaction.type'

export const useTransactionStore = defineStore('transaction', {
    state: () => {
        return {
            transactionData: reactive({
                transaction: {
                    user_id: 0,
                    address_id: 0,
                    image: '',
                    status_id: 0,
                    note: '',
                },
                transaction_detail: [],
            } as TransactionData),
        }
    },

    persist: {
        storage: persistedState.localStorage,
    },

    getters: {
        trashTotal(): number {
            return this.transactionData.transaction_detail.reduce((total: number, currentValue) => {
                return total + currentValue.weight;
            }, 0);
        }
    },

    actions: {
        addTrash(payload: TransactionDetail) {
            const existingDetail = this.transactionData.transaction_detail.find(detail => detail.trash_id === payload.trash_id);
            if (existingDetail) {
                existingDetail.weight += payload.weight;
            } else {
                this.transactionData.transaction_detail.push(payload);
            }
        },

        removeTrash(trashId: number) {
            const index = this.transactionData.transaction_detail.findIndex(detail => detail.trash_id === trashId);
            if (index !== -1) {
                this.transactionData.transaction_detail.splice(index, 1);
            }
        },
    }
})