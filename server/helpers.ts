export function AuthorizationCheck(session: any, reqId: string) {
    if (!session || !session.user?.id) {
        return { data: {}, status: 401 }
    }

    const userId = session.user.id

    if (userId !== parseInt(reqId)) {
        return { data: {}, status: 403 }
    }

    return { data: {}, status: 200 };
}