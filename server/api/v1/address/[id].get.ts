import { prisma } from '~/composables/prisma'
import { getServerSession } from '#auth'
import { AuthorizationCheck } from '~/server/helpers'

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const session = await getServerSession(event) as any

    if (id === undefined) {
        return { error: 'ID not found', status: 400 }
    }



    const res = await prisma.address.findUnique({
        where: {
            id: id
        }
    })

    if (res) {
        if (AuthorizationCheck(session, res.user_id.toString()).status !== 200) {
            return AuthorizationCheck(session, res.user_id.toString());
        }
    }

    return { data: res, status: 200 }
})
