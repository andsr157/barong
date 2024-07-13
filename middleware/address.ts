export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        const isEditOrAddRoute = (path: string) => /\/user\/profile\/address\/(edit\/[^\/]+|add)$/.test(path)
        if (!isEditOrAddRoute(from.path)) {
            console.log('Saving to localStorage:', from.fullPath)
            localStorage.setItem("previousValidRoute", from.fullPath)
        }
    }
})
