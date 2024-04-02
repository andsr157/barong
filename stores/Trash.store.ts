import { defineStore } from 'pinia'
import { type TrashCategory, type TrashSubCategory } from '~/types/trash.type'
import axios from 'axios'

export const useTrashStore = defineStore('trash', {
    state: () => ({
        category: [] as TrashCategory[],
        subcategory: [] as TrashSubCategory[],
        loading: false
    }),

    actions: {
        async getTrashCategory() {
            try {
                this.loading = true
                const res = await axios.get('/api/v1/trash')
                if (res.data.status === 200) {
                    this.category = res.data.data.category
                    this.subcategory = res.data.data.subcategory
                    this.loading = false
                } else {
                    console.log('failed fetching data')
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
})