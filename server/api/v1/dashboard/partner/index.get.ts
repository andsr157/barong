import { prisma } from '~/composables/prisma'
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
    const session = await getServerSession(event) as any
    const userId = session.user.id

    if (!userId) {
        return { data: {}, status: 200 };
    }
    const res = await prisma.transaction.findMany({
        where: {
            partner_id: userId,
            OR: [
                { status_id: 3 },
                { status_id: 4 }
            ],
        },
        include: {
            transaction_detail: true
        }
    })

    const lackOfPayment = 200

    let trashTotal = 0
    res.forEach(data => {
        data.transaction_detail.forEach(trash => {
            trashTotal += trash.weight
        })
    })

    const today = new Date();
    const currentMonth = today.getMonth() + 1;

    const { monthlyTotal, totalAmount, serviceBill } = res.reduce((accumulator, transaction) => {
        const date = new Date(transaction.date_created);
        const itemMonth = date.getMonth() + 1;

        if (itemMonth === currentMonth) {
            accumulator.monthlyTotal += transaction.total ?? 0;
        }
        accumulator.serviceBill += (transaction.total ?? 0) * 10 / 100

        accumulator.totalAmount += transaction.total ?? 0;

        return accumulator;
    }, { monthlyTotal: 0, totalAmount: 0, serviceBill: 0 });

    const { lastMonthService } = res.reduce((accumulator, transaction) => {
        const date = new Date(transaction.date_created);
        const itemMonth = date.getMonth() + 1;

        if (itemMonth === currentMonth - 1) {
            accumulator.lastMonthService += (transaction.total ?? 0) * 0.10; // 10% dari total biaya
        }

        return accumulator;
    }, { lastMonthService: 0 });

    const lackServiceBill = lastMonthService - lackOfPayment

    return { data: { totalAmount, monthlyTotal, trashTotal, serviceBill, lackServiceBill }, status: 200 }
})