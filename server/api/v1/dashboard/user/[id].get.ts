import { prisma } from '~/composables/prisma'

export default defineEventHandler(async (event) => {

    const user_id = await getRouterParam(event, 'id') ?? ''


    const res = await prisma.transaction.findMany({
        where: {
            user_id: parseInt(user_id),
            status_id: 3 || 4,

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
    // return res


    // Hitung total uang transaksi pengguna
    let totalAmount = 0;
    res.forEach(transaction => {
        totalAmount += transaction.total;
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