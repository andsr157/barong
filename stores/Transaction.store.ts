import { defineStore } from 'pinia'
import axios from 'axios'
import { type TransactionData, type TransactionDetail, type TransactionImage, type Transaction, type Address } from '~/types/transaction.type'


interface PostData {
    transaction: {
        id?: string | any,
        user_id: string,
        address: Address | any
        chats_id?: string | any,
        image: string,
        status_id: string,
        note: string,
    },
    transaction_detail: {
        id?: string,
        trash_id: string,
        weight: number
    }[],
}

export const useTransactionStore = defineStore('transaction', {
    state: () => {
        return {
            transactionData: reactive({
                transaction: {
                    id: null,
                    user_id: null,
                    chats_id: null,
                    image: null,
                    address: {
                        id: null,
                        label: '',
                        owner_name: '',
                        address_name: '',
                        owner_telp: '',
                        detail: '',
                        latitude: '',
                        longitude: ''
                    },
                    status_id: null,
                    note: '',
                },
                transaction_detail: [],
            } as TransactionData),
            transactionImage: null as any,
            transaction: [] as Transaction[],
            isLoading: false,
            statusLoading: false,
            formError: {
                message: ''
            }
        }
    },

    persist: {
        storage: persistedState.localStorage,
    },

    getters: {
        resetTransationData(): void {
            this.transactionData.transaction = {
                user_id: null,
                address: {
                    id: null,
                    label: '',
                    owner_name: '',
                    address_name: '',
                    owner_telp: '',
                    detail: '',
                    latitude: '',
                    longitude: ''
                },
                status_id: null,
                note: '',
            }
            this.transactionData.transaction_detail = []
        },
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

        takingTransaction(): Transaction[] {
            return this.transaction.filter((data) => {
                return data.status.name === "taking"
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

        removeTrash(trashId: string) {
            const index = this.transactionData.transaction_detail.findIndex(detail => detail.trash_id === trashId);
            if (index !== -1) {
                this.transactionData.transaction_detail.splice(index, 1);
            }
        },

        async addTransaction(payload: PostData) {
            console.log('jalan')
            const chat = await axios.post('/api/v1/chat', { user_id: payload.transaction.user_id })
            if (chat.data && chat.data.status !== 200) {
                return
            }
            payload.transaction.chats_id = chat.data.data.id
            const res = await axios.post('/api/v1/transaction', payload)
            this.isLoading = false
            this.resetTransationData
            this.transactionImage = null
            return Promise.resolve(res.data)
        },

        async updateTransaction(payload: PostData) {
            console.log(payload)
            const res = await axios.put('/api/v1/transaction', payload)
            this.isLoading = false
            this.resetTransationData
            this.transactionImage = null
            return Promise.resolve(res.data)
        },

        async deleteTransactionTrash(id: string) {
            this.isLoading = true
            const res = await axios.delete(`/api/v1/transaction/trash/${id}`).catch((error) => {
                this.isLoading = false
            }) as any

            if (res.data.status === 200) {
                this.transactionData.transaction_detail = this.transactionData.transaction_detail.filter(data => data.id !== id)
            }
            this.isLoading = false
        },

        async getActiveTransaction(role: string = 'user') {
            try {
                this.isLoading = true
                let res
                if (role === 'user') {
                    res = await axios.get('/api/v1/transaction/user/active')
                } else {
                    res = await axios.get('/api/v1/transaction/partner/active')
                }
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

        async getRequestTransaction() {
            try {
                this.isLoading = true
                const res = await axios.get('/api/v1/transaction/request')
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

        async getAllUserTransaction(role: string = 'user') {
            try {
                this.isLoading = true
                let res
                if (role === 'user') {
                    res = await axios.get('/api/v1/transaction/user')
                } else {
                    res = await axios.get('/api/v1/transaction/partner')
                }

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

        async getSingleTransaction(id: string) {
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

        async updateStatusTransaction(id: string, payload: any) {
            try {
                this.statusLoading = true
                const res = await axios.put(`/api/v1/transaction/partner/${id}`, payload)
                if (res.data.status === 200) {
                    this.statusLoading = false
                } else {
                    this.isLoading = false
                    this.statusLoading = false
                }
                return Promise.resolve(res.data)
            } catch (error) {
                this.isLoading = false
                this.statusLoading = false
                console.error(error)
            }
        }
    }
})