import { prisma } from "~/composables/prisma"
import { AuthorizationCheck } from '~/server/helpers'
import { getServerSession } from "#auth";

export default defineEventHandler(async (event) => {
    try {
        const session = await getServerSession(event) as any

        if (!session) {
            throw createError({
                statusCode: 403,
                statusMessage: 'Unauthorized'
            })
        }

        const transactionId = getRouterParam(event, 'id') ?? ''

        const res = await prisma.transaction.findUnique({
            where: {
                id: transactionId
            },
            select: {
                id: true,
                partner_id: true,
                user: {
                    select: {
                        name: true
                    }
                },
                address: true,
                chats_id: true
            }
        }) as any

        const { address, ...resData } = res
        const parseAddress = {
            address: JSON.parse(address)
        }
        const data = { ...resData, ...parseAddress }

        console.log(res)

        // if (session) {
        //     AuthorizationCheck(session, res?.partner_id);
        // }

        return { data: data, status: 200 }
    } catch (error) {
        console.error('Error fetching transaction data:', error);
        return { error: error, status: 500 };
    }
})