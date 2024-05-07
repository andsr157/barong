import { prisma } from '~/composables/prisma'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log(body)
    const count = await prisma.messages.count()
    const res = await prisma.messages.create({
        data: { id: `MSG${count + 1}`, ...body }
    })
    if (res) {
        return { data: res, status: 200 }
    }
})