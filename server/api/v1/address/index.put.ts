import { prisma } from '~/composables/prisma'
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const session = await getServerSession(event) as any
    const res = await prisma.address.update({
        where: {
            id: body.id,
        },
        data: body
    })

    if (res) {
        return { data: res, status: 200 }
    }
    return { data: {}, status: 400 }

})