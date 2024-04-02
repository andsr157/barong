import { defineStore } from 'pinia'
import axios from 'axios'
import { type TransactionData, type TransactionDetail, type TransactionImage, type Transaction } from '~/types/transaction.type'
import type { transaction } from '@prisma/client'

interface PostData {
    transaction: {
        user_id: number,
        address_id: number,
        image: string,
        status_id: number,
        note: string,
    },
    transaction_detail: {
        trash_id: number,
        weight: number
    }[]
}

export const useTransactionStore = defineStore('transaction', {
    state: () => {
        return {
            transactionData: reactive({
                transaction: {
                    user_id: 0,
                    address_id: 0,
                    status_id: 0,
                    note: '',
                },
                transaction_detail: [],
            } as TransactionData),

            transactionImage: null as any,
            isLoading: false,
            transaction: [] as Transaction[]
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

        async addTransaction(payload: PostData) {
            console.log('jalan')
            const res = await axios.post('/api/v1/transaction', payload)
            this.isLoading = false
            this.transactionData.transaction = {
                user_id: 0,
                address_id: 0,
                status_id: 0,
                note: '',
            }
            this.transactionData.transaction_detail = []
            this.transactionImage = null
            return Promise.resolve(res.data)
        },

        async getActiveTransaction() {
            try {
                this.isLoading = true
                const res = await axios.get('/api/v1/transaction/active')
                if (res.data.status === 200) {
                    this.isLoading = false
                }
                return Promise.resolve(res.data)
            } catch (error) {
                console.error(error)
            }

        }
    }
})