import jwt, { decode } from 'jsonwebtoken'
import { prisma } from '~/composables/prisma'
import bcrypt from 'bcrypt'

const jwtSecret = process.env.JWT_SECRET as string

export default defineEventHandler(async (event) => {
    try {
        const { newPassword, token } = await readBody(event)
        let emailPayload: string = ''
        const isVerified = jwt.verify(token, jwtSecret, (err: any, decoded: any) => {
            if (err) {
                return { error: 'invalid or expired token', status: 400 }
            }
            const { email } = decoded
            emailPayload = email
            return { status: 200 }
        }) as any


        if (isVerified.status === 400) {
            return isVerified
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(newPassword, salt)
        const res = await prisma.users.update({
            where: {
                email: emailPayload
            },
            data: {
                password: hashedPassword
            }
        })

        if (res) {
            return { data: res, status: 200 }
        }
    } catch (error) {
        return { data: {}, error: error, status: 500 }
    }

})