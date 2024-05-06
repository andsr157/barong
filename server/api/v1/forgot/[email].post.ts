import verifyEmailTemplate from '../../../app/email/veryEmailTemplate';
import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'
const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
        user: process.env.NUXT_MAILER_USER,
        pass: process.env.NUXT_MAILER_PASS,
    },
});
const jwtSecret = process.env.JWT_SECRET as string
const base_url = process.env.BASE_URL

export default defineEventHandler(async (event) => {
    try {
        const email = getRouterParam(event, 'email') ?? ''
        const token = jwt.sign({ email }, jwtSecret, { expiresIn: '1h' })
        const template = verifyEmailTemplate(`${base_url}/change-password/${token}`, 'barong.surakarta.adm@gmail.com', 'barong admin', 'admin barong')
        const res = transporter.sendMail({
            from: process.env.NUXT_MAILER_USER,
            to: email,
            subject: 'Reset Password Link',
            text: template.text,
            html: template.html
        })
        return res

    } catch (error) {
        return { data: {}, status: 500, error: error }
    }
})