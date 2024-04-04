import { prisma } from "~/composables/prisma"

export default defineEventHandler(async (event) => {

    const id = await getRouterParam(event, 'id') ?? '';

    const res = await prisma.transaction_detail.delete({
        where: {
            id: parseInt(id)
        }
    })

    if (res) {
        return { data: res, status: 200 }
    } else {
        return { data: {}, status: 400 }
    }
})