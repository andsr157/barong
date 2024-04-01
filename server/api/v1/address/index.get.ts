import { prisma } from '~/composables/prisma'
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {

    const session = await getServerSession(event) as any
    const user_id = session.user.id

    const res = await prisma.address.findMany({
        where: {
            user_id: user_id
        },
        select: {
            id: true,
            label: true,
            address_name: true,
            detail: true,
            owner_name: true,
            owner_telp: true,
            latitude: true,
            longitude: true,
            is_main: true,
        }
    })
    res.sort((a, b) => (b.is_main ? 1 : 0) - (a.is_main ? 1 : 0));
    return { data: res, status: 200 }
})