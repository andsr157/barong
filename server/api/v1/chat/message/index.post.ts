import { prisma } from '~/composables/prisma'
import Chat_id from '~/pages/chat/[chat_id].vue'
import { getNextNumber } from '~/server/helpers'

export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    let id

    const count = await prisma.messages.count()

    if (count === 0) {
        id = 'MSG1'
    } else {
        const lastId = await prisma.messages.findFirst({
            select: {
                id: true
            },
            orderBy: {
                id: 'desc'
            }
        })

        if (lastId) {
            id = getNextNumber(lastId.id)
        }
    }

    const res = await prisma.messages.create({
        data: { id: id, ...body }
    })
    if (res) {
        return { data: res, status: 200 }
    }
})