export default defineNuxtRouteMiddleware((to) => {
    const { data: user } = <any>useAuth();
    if (user?.value.user.role === 'partner' && to.path.startsWith('/user')) {
        return navigateTo('/partner');
    }

    if (user?.value.user.role === 'user' && to.path.startsWith('/partner')) {
        return navigateTo('/user');
    }
});