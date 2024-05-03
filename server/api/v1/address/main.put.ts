import { prisma } from '~/composables/prisma'
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
    const session = await getServerSession(event) as any
    const body = await readBody(event)
    console.log(session)
    const user_id = session.user.id
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

    const setNewCurrent = await prisma.address.update({
        where: {
            id: body.id
        },
        data: {
            is_main: body.is_main
        }
    })
    if (setNewCurrent) {
        return { status: 200 }
    }
    return { error: 'update', status: 400 }


})