import { prisma } from '~/composables/prisma'
import { getServerSession } from '#auth'
import { AuthorizationCheck } from '~/server/helpers'

export default defineEventHandler(async (event) => {
    const session = await getServerSession(event) as any
    const userId = session.user.id

    if (!userId) {
        return { data: {}, status: 400 };
    }
    const res = await prisma.transaction.findMany({
        where: {
            user_id: parseInt(userId),
            OR: [
                { status_id: 3 },
                { status_id: 4 }
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

    console.log(res)

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
})