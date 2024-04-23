import { prisma } from '~/composables/prisma'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log(body)
    const res = await prisma.messages.create({
        data: body
    })

    if (res) {
        return { data: res, status: 200 }
    }
})