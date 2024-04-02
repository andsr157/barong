import { prisma } from '~/composables/prisma'

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')

    if (id === undefined) {
        // Handle jika ID tidak ditemukan
        return { error: 'ID not found', status: 400 }
    }

    const idAsNumber = parseInt(id)
    if (isNaN(idAsNumber)) {
        return { error: 'Invalid ID', status: 400 }
    }

    const res = await prisma.address.findUnique({
        where: {
            id: idAsNumber
        }
    })

    return { data: res, status: 200 }
})
