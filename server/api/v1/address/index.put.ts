import { prisma } from '~/composables/prisma'
import { getServerSession } from '#auth'
import { AuthorizationCheck } from '~/server/helpers'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const session = await getServerSession(event) as any
    console.log(body)
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