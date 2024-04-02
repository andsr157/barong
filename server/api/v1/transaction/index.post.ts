import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    // return body

    const res = await prisma.transaction.create({
        data: {

            user_id: body.transaction.user_id,
            address_id: body.transaction.address_id,
            image: body.transaction.image,
            status_id: body.transaction.status_id,
            note: body.transaction.note,
            partner_id: null,
            partner_rate: null,
            partner_review: null,
            total: null,
        }

    })


    // return res

    const detaiData = {
        transaction_id: res.id,
        price: 0,
    }

    const transaction_detail = await prisma.transaction_detail.createMany({
        data: body.transaction_detail.map((data: any) => {
            return { ...data, ...detaiData }
        })
    })
    return transaction_detail
})