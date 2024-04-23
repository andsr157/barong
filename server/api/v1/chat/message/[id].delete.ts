import { prisma } from "~/composables/prisma"

export default defineEventHandler(async (event) => {

    const id = getRouterParam(event, 'id') ?? '';

    const res = await prisma.messages.deleteMany({
        where: {
            chats_id: parseInt(id)
        }
    })

    if (!res) {
        return { data: {}, status: 400 }
    }
    return { data: res, status: 200 }
})