import { prisma } from '~/composables/prisma'
import { getServerSession, } from '#auth';
import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const { user: userSession } = await <any>getServerSession(event)
        const user = await prisma.users.findUnique({
            where: {
                id: userSession.id
            },
            select: { id: true, password: true }
        })

        if (!user) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Gagal mengubah kata sandi',
            })
        }

        const isPasswordValid = await bcrypt.compare(body.oldPassword, user.password)

        if (!isPasswordValid) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Password Salah',
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(body.newPassword, salt)

        const res = await prisma.users.update({
            where: {
                id: user.id
            },
            data: {
                password: hashedPassword
            }
        })

        if (!res) {
            return { data: {}, status: 400 }
        }

        return { data: res, status: 200 }

    } catch (error) {
        return { data: {}, error: error, status: 500 }
    }
});
