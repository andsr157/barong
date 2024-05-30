import { prisma } from '~/composables/prisma'
import { getServerSession } from '#auth'
import { AuthorizationCheck } from '~/server/helpers';


export default defineEventHandler(async (event) => {
    try {
        const session = await getServerSession(event) as any
        const chats_id = getRouterParam(event, 'id') ?? '';
        const res = await prisma.chats.findUnique({
            where: {
                id: chats_id
            },
            include: {
                messages: true
            }
        })


        if (!res) {
            return { data: {}, status: 400 };
        }

        if (session?.user?.role === 'user') {
            AuthorizationCheck(session, res.user_id);
        } else if (session?.user?.role === 'partner') {
            AuthorizationCheck(session, res.partner_id ?? '');
        }


        const user = await prisma.users.findUnique({
            where: {
                id: res.user_id
            },
            select: {
                id: true,
                name: true,
                avatar: true
            }
        })

        const partner = await prisma.users.findUnique({
            where: {
                id: res.partner_id ?? ''
            },
            select: {
                id: true,
                name: true,
                avatar: true
            }
        })

        const messages = res.messages.map((data: any) => {
            const { chats_id, ...newData } = data
            return newData
        })

        const payload = {
            chats_id: res.id,
            users: [
                user, partner
            ],
            messages: messages
        }

        return { data: payload, status: 200 }

    } catch (error) {
        return error
    }

})