import { defineStore } from "pinia";
import axios from 'axios'

interface auth_state {
    userData: {
        name?: string,
        email: string,
        telp?: string,
        role?: string,
        password: string,
        password_confirmation: string
    }
    loading: boolean
}


export const useAuthStore = defineStore('Auth-store', {
    state: () => ({
        loading: false
    }),

    actions: {
        async register(payload: auth_state['userData']) {
            try {
                this.loading = true
                const { password_confirmation, ...data } = { ...payload, role: 'user', avatar: '/assets/dummy-profile.png' }
                const res = await axios.post('/api/v1/register', data)
                console.log('res', res.data)
                return Promise.resolve(res.data)
            } catch (error) {
                console.error('Registration failed with status code:', error)
            } finally {
                this.loading = false
            }
        }
    }
})

