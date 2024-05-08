import { prisma } from '~/composables/prisma'
import { getNextNumber } from '~/server/helpers'

export default defineEventHandler(async (event) => {

    const body = await readBody(event)

    const lastId = await prisma.messages.findFirst({
        select: {
            id: true
        },
        orderBy: {
            id: 'desc'
        }
    })

    if (!lastId) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized'
        })
    }

    const id = getNextNumber(lastId.id)

    const res = await prisma.messages.create({
        data: { id: id, ...body }
    })
    if (res) {
        return { data: res, status: 200 }
    }
})