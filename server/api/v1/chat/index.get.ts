import { prisma } from '~/composables/prisma'

export default defineEventHandler(async (event) => {

    const res = await prisma.chat.findMany()

    if (res) {
        return { data: res }
    }
})