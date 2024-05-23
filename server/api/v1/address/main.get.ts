import { prisma } from '~/composables/prisma'
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
    try {
        const session = await getServerSession(event) as any
        const user_id = session.user.id
        const res = await prisma.address.findMany({
            where: {
                user_id: user_id,
                is_main: true
            }
        })

        if (!(res.length)) {
            return { data: null, status: 400 }
        }

        return { data: res, status: 200 }
    } catch (error) {
        console.error(error)
        return { data: null, error: error, status: 500, }
    }


})