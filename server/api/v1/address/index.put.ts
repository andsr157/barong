import { prisma } from '~/composables/prisma'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const user_id = getRouterParam(event, 'id') ?? ''


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