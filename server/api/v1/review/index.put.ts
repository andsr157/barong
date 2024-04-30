import { prisma } from '~/composables/prisma'
import { getServerSession } from '#auth'
import Partner from '~/layouts/Partner.vue';

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const session = await getServerSession(event) as any
        const userId = session.user.id


        if (!userId) {
            return { data: {}, status: 400 };
        }
        const res = await prisma.transaction.update({
            where: {
                id: body.id
            },
            data: {
                partner_rate: body.rate,
                partner_review: body.review,
                status_id: 4,
            }
        })

        if (!res) {
            return { data: {}, status: 400 }
        }
        return { data: res, status: 200 }
    } catch (error) {
        console.error(error)
        return { data: null, status: 500 };
    }

})