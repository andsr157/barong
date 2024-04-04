import { prisma } from '~/composables/prisma'
import { getServerSession } from '#auth'
import { AuthorizationCheck } from '~/server/helpers'

export default defineEventHandler(async (event) => {
    const addressId = getRouterParam(event, 'id') ?? ''
    const session = await getServerSession(event) as any


    const res = await prisma.address.delete({
        where: {
            id: parseInt(addressId)
        }
    })

    if (res) {
        return { status: 200 }
    }

    return { status: 400 }

})