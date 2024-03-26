// Axios

import defaultAxios from 'axios'

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    const axios = defaultAxios.create({
        baseURL: '/api/v1/',
        timeout: 5000,
    })

    axios.defaults.headers.common['Authorization'] = null
    // Add a request interceptor
    axios.interceptors.request.use(
        (config) => {
            // Do something before request is sent
            return config
        },
        (error) => {
            // Do something with request error
            return Promise.reject(error)
        },
    )

    // Add a response interceptor
    axios.interceptors.response.use(
        (response) => {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response
        },
        (error) => {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            return Promise.reject(error)
        },
    )

    return {
        provide: {
            axios,
        },
    }
})
