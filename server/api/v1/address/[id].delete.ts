import { prisma } from '~/composables/prisma'

export default defineEventHandler(async (event) => {
    const addressId = getRouterParam(event, 'id') ?? ''

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