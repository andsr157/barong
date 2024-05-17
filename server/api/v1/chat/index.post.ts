import { prisma } from '~/composables/prisma'
import { getNextNumber } from '~/server/helpers'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)


    const res = await prisma.chats.create({
        data: {
            user_id: body.user_id,
            partner_id: null
        }
    })

    if (!res) {
        return { data: {}, status: 400 }
    }

    return { data: res, status: 200 }
})