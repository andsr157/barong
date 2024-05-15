import { prisma } from "@/composables/prisma"
import { getNextNumber } from "~/server/helpers"
import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    if (!body.email || !body.name || !body.password || !body.telp) {
        throw createError({
            status: 400,
            statusMessage: "bad request",
            message: 'Missing required field'
        })
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(body.password, salt)


    const count = await prisma.users.count()

    let id
    if (count === 0) {
        id = "USR1"
    } else {
        const lastId = await prisma.users.findFirst({
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

    const createdUser = await prisma.users.create({
        data: {
            ...body,
            id: id,
            password: hashedPassword,
        }
    })
    const { password, ...user } = createdUser
    return { user: createdUser, status: 200 }
})