import { defineStore } from 'pinia'
import axios from 'axios'
import { type TransactionData, type TransactionDetail, type TransactionImage, type Transaction } from '~/types/transaction.type'


interface PostData {
    transaction: {
        id?: number,
        user_id: number,
        address_id: number,
        image: string,
        status_id: number,
        note: string,
    },
    transaction_detail: {
        id?: number,
        trash_id: number,
        weight: number
    }[]
}

export const useTransactionStore = defineStore('transaction', {
    state: () => {
        return {
            transactionData: reactive({
                transaction: {
                    id: 0,
                    user_id: 0,
                    address_id: 0,
                    status_id: 0,
                    note: '',
                },
                transaction_detail: [],
            } as TransactionData),
            transactionImage: null as any,
            isLoading: false,
            statusLoading: false,
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
        },

        activeTransaction(): Transaction[] {
            return this.transaction.filter((data) => {
                return data.status.name === "taking" || data.status.name === "searching"
            })
        },

        doneTransaction(): Transaction[] {
            return this.transaction.filter((data) => {
                return data.status.name === "finish"
            })
        },

        canceledTransaction(): Transaction[] {
            return this.transaction.filter((data) => {
                return data.status.name === "canceled"
            })
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

        async updateTransaction(payload: PostData) {
            console.log(payload)
            const res = await axios.put('/api/v1/transaction', payload)
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

        async deleteTransactionTrash(id: number) {
            this.isLoading = true
            const res = await axios.delete(`/api/v1/transaction/trash/${id}`)
            if (res.data.status === 200) {
                this.transactionData.transaction_detail = this.transactionData.transaction_detail.filter(data => data.id !== id)
            } else {
                this.isLoading = false
            }
        },

        async getActiveTransaction() {
            try {
                this.isLoading = true
                const res = await axios.get('/api/v1/transaction/active')
                if (res.data.status === 200) {
                    this.isLoading = false
                } else {
                    this.isLoading = false
                }
                return Promise.resolve(res.data)
            } catch (error) {
                console.error(error)
            }

        },

        async getAllTransaction() {
            try {
                this.isLoading = true
                const res = await axios.get('/api/v1/transaction')
                if (res.data.status === 200) {
                    this.transaction = res.data.data
                    this.isLoading = false
                } else {
                    this.isLoading = false
                }
                return Promise.resolve(res.data)
            } catch (error) {
                console.error(error)
            }
        },

        async getSingleTransaction(id: number) {
            try {
                this.isLoading = true
                const res = await axios.get(`/api/v1/transaction/${id}`)
                if (res.data.status === 200) {
                    this.isLoading = false
                } else {
                    this.isLoading = false
                }
                return Promise.resolve(res.data)
            } catch (error) {
                console.error(error)
            }
        },

        async updateStatusTransaction(id: number, payload: any) {
            try {
                this.statusLoading = true
                const res = await axios.put(`/api/v1/transaction/partner/${id}`, payload)
                if (res.data.status === 200) {
                    this.statusLoading = false
                } else {
                    this.isLoading = false
                }
                return Promise.resolve(res.data)
            } catch (error) {
                this.statusLoading = false
                console.error(error)
            }
        }
    }
})