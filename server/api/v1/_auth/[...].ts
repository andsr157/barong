import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from "~/composables/prisma"
import bcrypt from 'bcrypt'

export default NuxtAuthHandler({

    secret: useRuntimeConfig().app.appSecret,

    pages: {
        signIn: "/login"
    },
    providers: [
        // @ts-expect-error
        CredentialsProvider.default({
            name: 'credentials',
            async authorize(credentials: { email: string, password: string }) {

                const user = await prisma.users.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if (!user) {
                    throw createError({
                        statusCode: 401,
                        statusMessage: 'Unauthorized',
                    })
                }

                const isPasswordValid = await bcrypt.compare(credentials.password, user.password)

                if (!isPasswordValid) {
                    throw createError({
                        statusCode: 401,
                        statusMessage: 'Unauthorized',
                    })
                }

                // const { password, ...userData } = user
                return user
            }
        })
    ],

    session: {
        strategy: 'jwt'
    },

    callbacks: {
        async jwt({ token, user, account }) {
            if (user) {
                const { password, ...userData } = <any>user
                token = {
                    ...token,
                    ...userData
                }
            }
            return token
        },

        async session({ session, token }) {
            const { password, ...userData } = <any>session.user
            session.user = {
                ...token,
                ...userData
            }

            return session
        }
    }
})
