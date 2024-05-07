import { prisma } from '~/composables/prisma'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const count = await prisma.chats.count()
    const res = await prisma.chats.create({
        data: {
            id: `CHT${count + 1}`,
            user_id: body.user_id,
            partner_id: null
        }
    })

    if (!res) {
        return { data: {}, status: 400 }
    }

    return { data: res, status: 200 }
})