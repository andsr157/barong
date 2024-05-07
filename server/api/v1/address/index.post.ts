import { prisma } from '~/composables/prisma'
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
    const session = await getServerSession(event) as any
    const body = await readBody(event)
    const user_id = session.user.id

    let address = body
    if (body.detail === undefined || body.detail === null) {
        address = { ...address, detail: null }
    }

    if (body.is_main === undefined || body.is_main === null) {
        address = { ...address, is_main: false }
    }

    if (body.is_main === true) {
        const currentMain = await prisma.address.findMany({
            where: {
                user_id: user_id,
                is_main: true
            }
        })


        if (currentMain.length > 0) {
            const setFalseCurrent = await prisma.address.update({
                where: {
                    id: currentMain[0].id,
                },
                data: {
                    is_main: false
                }
            })
        }
    }

    const count = await prisma.address.count()
    const res = await prisma.address.create({
        data: { ...address, user_id: user_id, id: `ADR${count + 1}` }
    })

    if (res) {
        return { data: res, status: 200 }
    }
    return { data: {}, status: 400 }
})