export function AuthorizationCheck(session: any, reqId: string) {
    if (!session || !session.user?.id) {
        throw { data: null, status: 401 }
    }

    const userId = session.user.id
    if (userId !== reqId) {
        throw { data: null, status: 403 }
    }

}

export function getCurrentMonth() {
    let date = new Date();
    let startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).toISOString();
    let endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).toISOString();
    return { startOfMonth, endOfMonth };
}

export function getNextNumber(code: string): string {
    const lettersMatch = code.match(/[a-zA-Z]+/);
    const numbersMatch = code.match(/\d+/);

    if (lettersMatch && numbersMatch) {
        const letters = lettersMatch[0];
        const numbers = numbersMatch[0];
        return `${letters}${parseInt(numbers) + 1}`
    } else {
        return '';
    }
}

export function getSeparateNumber(code: string): any {
    const lettersMatch = code.match(/[a-zA-Z]+/);
    const numbersMatch = code.match(/\d+/);

    if (lettersMatch && numbersMatch) {
        const letters = lettersMatch[0];
        const numbers = numbersMatch[0];
        return parseInt(numbers)
    } else {
        return '';
    }
}