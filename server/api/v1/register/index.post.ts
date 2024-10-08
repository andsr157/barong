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


    const createdUser = await prisma.users.create({
        data: {
            ...body,
            password: hashedPassword,
        }
    })
    const { password, ...user } = createdUser
    return { user: createdUser, status: 200 }
})