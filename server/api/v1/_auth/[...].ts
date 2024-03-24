import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from "~/composables/prisma"


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
                return {}
            }
        })
    ],

    session: {
        strategy: 'jwt'
    },

    callbacks: {

    }
})
