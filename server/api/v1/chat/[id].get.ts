import { prisma } from '~/composables/prisma'
import { getServerSession } from '#auth'
import { AuthorizationCheck } from '~/server/helpers';


export default defineEventHandler(async (event) => {

    const session = await getServerSession(event) as any
    const chats_id = getRouterParam(event, 'id') ?? '';
    const res = await prisma.chats.findUnique({
        where: {
            id: parseInt(chats_id)
        },
        include: {
            messages: true
        }

    })


    if (!res) {
        return { data: {}, status: 400 };
    }

    let authorizationResult

    if (session?.user?.role === 'user') {
        authorizationResult = AuthorizationCheck(session, res.user_id.toString());
    } else {
        authorizationResult = AuthorizationCheck(session, res.partner_id.toString());
    }

    if (authorizationResult.status !== 200) {
        return authorizationResult;
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
            id: res.partner_id
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

    if (res) {
        return { data: payload, status: 200 }
    }
})