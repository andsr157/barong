import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    // return body

    const count = await prisma.transaction.count()

    const res = await prisma.transaction.create({
        data: {
            id: `TR${count + 1}`,
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

    const countDetail = await prisma.transaction_detail.count()
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