import { defineStore } from 'pinia'
import { type TrashCategory, type TrashSubCategory } from '~/types/trash.type'
import axios from 'axios'

export const useTrashStore = defineStore('trash', {
    state: () => ({
        category: [] as TrashCategory[],
        subcategory: [] as TrashSubCategory[],
    }),

    actions: {
        async getTrashCategory() {
            try {
                const res = await axios.get('/api/v1/trash/category')
                if (res.data.status === 200) {
                    this.category = res.data.data.category
                    this.subcategory = res.data.data.subcategory
                } else {
                    console.log('failed fetching data')
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
})