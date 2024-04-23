import { prisma } from '~/composables/prisma'

export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    const chats = await prisma.chats.update({
        where: {
            id: parseInt(body.chats_id)
        },
        data: {
            partner_id: body.partner_id
        }
    })

    if (!chats) {
        return { data: {}, status: 400 }
    }
    return { data: chats, status: 200 }
})