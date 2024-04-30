import { prisma } from '~/composables/prisma'
import { getServerSession } from '#auth'
import Partner from '~/layouts/Partner.vue';

export default defineEventHandler(async (event) => {
    try {
        const partnerId = getRouterParam(event, 'id') ?? '';
        const session = await getServerSession(event) as any
        const userId = session.user.id


        if (!userId) {
            return { data: {}, status: 400 };
        }
        const res = await prisma.users.findUnique({
            where: {
                id: parseInt(partnerId),
            },
            select: {
                id: true,
                name: true,
                telp: true,
                avatar: true
            }
        })

        if (!res) {
            return { data: {}, status: 400 }
        }
        return { data: res, status: 200 }
    } catch (error) {
        console.error(error)
        return { data: null, status: 500 };
    }

})