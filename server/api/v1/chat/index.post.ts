import { prisma } from '~/composables/prisma'
import { getNextNumber } from '~/server/helpers'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const lastId = await prisma.chats.findFirst({
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

    const res = await prisma.chats.create({
        data: {
            id: id,
            user_id: body.user_id,
            partner_id: null
        }
    })

    if (!res) {
        return { data: {}, status: 400 }
    }

    return { data: res, status: 200 }
})