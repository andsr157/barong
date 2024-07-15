import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { prisma } from "@/composables/prisma"
import bcrypt from 'bcrypt'

export default NuxtAuthHandler({

    secret: useRuntimeConfig().app.appSecret,

    pages: {
        signIn: "/login"
    },
    providers: [
        // @ts-expect-error
        GoogleProvider.default({
            clientId: useRuntimeConfig().app.googleClientId,
            clientSecret: useRuntimeConfig().app.googleSecret
        }),

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

            if (account?.provider === 'google') {
                const existingUser = await prisma.users.findUnique({
                    where: {
                        email: token.email,
                    }
                })

                if (!existingUser) {
                    const salt = await bcrypt.genSalt(10)
                    const randomPassword = Math.random().toString(36).slice(-8)
                    const hashedPassword = await bcrypt.hash(randomPassword, salt)
                    const newUser = await prisma.users.create({
                        data: {
                            email: token.email,
                            name: token.name,
                            avatar: '/assets/dummy-profile.png',
                            telp: '62',
                            password: hashedPassword,
                            role: 'user',
                        }
                    })
                    token = {
                        ...token,
                        ...newUser
                    }
                }
            }
            return token
        },

        async session({ session, token }, refetch = false) {
            const { email } = <any>session.user
            const { password, ...userData } = <any>session.user
            session.user = {
                ...token,
                ...userData,
            }

            try {
                const updatedUser = await prisma.users.findUnique({
                    where: {
                        email: email
                    }
                })

                if (updatedUser) {
                    session.user = {
                        ...session.user,
                        ...updatedUser
                    }
                }

            } catch (error) {

            }
            return session
        }
    }
})
