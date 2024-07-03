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
                user_id: true,
                partner_id: true,
                partner: {
                    select: {
                        name: true,
                        telp: true,
                        avatar: true
                    }
                },
                chats_id: true
            }
        }) as any

        const rate = await prisma.users.findUnique({
            where: {
                id: res.partner_id
            },
            select: {
                ReferredToUser: {
                    select: {
                        partner_rate: true
                    }
                }
            }
        })

        if (session) {
            AuthorizationCheck(session, res?.user_id);
        }

        if (!rate) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Bad Request'
            })
        }

        const validRatings = rate.ReferredToUser.filter(transaction => transaction.partner_rate !== null);
        const totalRate = rate.ReferredToUser.reduce((acc, trasaction) => acc + (trasaction.partner_rate || 0), 0);
        const rateCount = validRatings.length;
        const averageRate = rateCount > 0 ? parseFloat((totalRate / rateCount).toFixed(1)) : 0;

        const partnerRate = {
            rate: averageRate
        }

        return { data: { ...res, ...partnerRate }, status: 200 }
    } catch (error) {
        console.error('Error fetching transaction data:', error);
        return { error: error, status: 500 };
    }
})