import { prisma } from "~/composables/prisma"

export default defineEventHandler(async (event) => {

    try {
        const id = getRouterParam(event, 'id') ?? '';

        const res = await prisma.messages.deleteMany({
            where: {
                chats_id: id
            }
        })

        if (!res) {
            return { data: {}, status: 400 }
        }
        return { data: res, status: 200 }
    } catch (error) {
        return { data: null, status: 500 }
    }


})