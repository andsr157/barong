import { prisma } from '~/composables/prisma'
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
    const session = await getServerSession(event) as any
    const user_id = session.user.id
    const res = await prisma.address.findMany({
        where: {
            user_id: user_id,
            is_main: true
        }
    })

    if (res) {
        return { data: res, status: 200 }
    }
    return { data: {}, status: 400 }
})