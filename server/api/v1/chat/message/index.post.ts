import { prisma } from '~/composables/prisma'
import Chat_id from '~/pages/chat/[chat_id].vue'
import { getNextNumber } from '~/server/helpers'

export default defineEventHandler(async (event) => {

    const body = await readBody(event)


    const res = await prisma.messages.create({
        data: body
    })
    if (res) {
        return { data: res, status: 200 }
    }
})