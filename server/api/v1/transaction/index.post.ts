import { PrismaClient } from "@prisma/client";
import { getNextNumber, getSeparateNumber } from "~/server/helpers";
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    // return body

    const count = await prisma.transaction.count()

    let id
    if (count === 0) {
        id = 'TR1'
    } else {
        const lastId = await prisma.transaction.findFirst({
            select: {
                id: true
            },
            orderBy: {
                id: 'desc'
            }
        })

        if (!lastId) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Unauthorized'
            })
        }

        id = getNextNumber(lastId.id)
    }


    const res = await prisma.transaction.create({
        data: {
            id: id,
            user_id: body.transaction.user_id,
            address: JSON.stringify(body.transaction.address),
            image: body.transaction.image,
            status_id: body.transaction.status_id,
            chats_id: body.transaction.chats_id,
            note: body.transaction.note,
            partner_id: null,
            partner_rate: null,
            partner_review: null,
            total: null,
        }
    })

    // return res

    const detailData = {
        transaction_id: res.id,
        price: 0,
    }

    const lastDetailId = await prisma.transaction_detail.findFirst({
        select: {
            id: true
        },
        orderBy: {
            id: 'desc'
        }
    })

    if (!lastDetailId) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized'
        })
    }

    const countDetail = getSeparateNumber(lastDetailId.id)

    let tempCountDetail = countDetail
    const transaction_detail = await prisma.transaction_detail.createMany({
        data: body.transaction_detail.map((data: any) => {
            const { id, ...restData } = data
            tempCountDetail += 1
            return { id: `TRD${tempCountDetail}`, ...restData, ...detailData, }
        })
    })
    return transaction_detail
})