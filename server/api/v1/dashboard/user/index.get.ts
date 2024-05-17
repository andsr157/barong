import { prisma } from '~/composables/prisma'
import { getServerSession } from '#auth'
import { AuthorizationCheck } from '~/server/helpers'

export default defineEventHandler(async (event) => {
    try {
        const session = await getServerSession(event) as any
        const userId = session.user.id


        if (!userId) {
            return { data: {}, status: 400 };
        }
        const res = await prisma.transaction.findMany({
            where: {
                user_id: userId,
                OR: [
                    { status_id: 'STS3' },
                    { status_id: 'STS4' }
                ]
            },
            include: {
                transaction_detail: {
                    include: {
                        trash: {
                            include: {
                                category: true
                            }
                        }
                    }
                }
            }
        })

        let totalAmount = 0;
        res.forEach(transaction => {
            totalAmount += transaction.total ?? 0;
        });

        const trashes = <any>[]
        for (let i = 0; i < res.length; i++) {
            const transaction_detail = res[i].transaction_detail
            if (transaction_detail.length > 0) {
                for (let i = 0; i < transaction_detail.length; i++) {
                    const trash = {
                        category: transaction_detail[i].trash.category.name,
                        weight: transaction_detail[i].weight
                    }
                    const isAlreadyExist = trashes.findIndex((data: any) => {
                        return data.category === transaction_detail[i].trash.category.name
                    })
                    if (isAlreadyExist === -1) {
                        trashes.push(trash)
                    }
                    else {
                        trashes[isAlreadyExist].weight += transaction_detail[i].weight
                    }
                }
            }
        }

        return { data: { trash: trashes, totalAmount }, status: 200 }
    } catch (error) {
        console.error(error)
        return { data: null, status: 500 };
    }

})