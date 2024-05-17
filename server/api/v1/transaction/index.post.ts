import { PrismaClient } from "@prisma/client";
import { getNextNumber, getSeparateNumber } from "~/server/helpers";
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    // return body


    const res = await prisma.transaction.create({
        data: {
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

    const detailData = {
        transaction_id: res.id,
        price: 0,
    }

    const transaction_detail = await prisma.transaction_detail.createMany({
        data: body.transaction_detail.map((data: any) => {
            const { id, ...resData } = data
            return { ...resData, ...detailData, }
        })
    })
    return transaction_detail
})