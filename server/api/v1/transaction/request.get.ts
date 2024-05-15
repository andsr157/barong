// Import Prisma Client
import { prisma } from '~/composables/prisma';
import { getServerSession } from '#auth'
import { AuthorizationCheck } from '~/server/helpers'
import useCustomMaps from '~/server/app/map/useMap';


export default defineEventHandler(async (event) => {
    try {
        const session = await getServerSession(event) as any
        const query = getQuery(event) as any;
        const maps = useCustomMaps()

        const lat = parseFloat(query.lat)
        const lng = parseFloat(query.lng)

        let latestCursor
        if (query.cursor !== '0') {
            latestCursor = new Date(query.cursor)
        }

        const queryPrisma: any = {
            take: parseInt(query.limit),
            where: {
                status_id: 'STS1'
            },
            include: {
                user: {
                    select: {
                        name: true,
                        telp: true
                    }
                },
                transaction_detail: {
                    include: {
                        trash: {
                            include: {
                                category: true,
                            }
                        },
                    },
                },
                status: true,
            },
        }

        if (query.cursor != '0') {
            queryPrisma['skip'] = 1;
            queryPrisma['cursor'] = { updated_at: latestCursor };
        }



        const [total_record, transactions]: [any, any] = await Promise.all([
            prisma.transaction.count({
                where: {
                    status_id: 'STS1'
                }
            }),
            prisma.transaction.findMany(queryPrisma)
        ]);

        return transactions


        if (AuthorizationCheck(session, transactions[0].user_id.toString()).status !== 200) {
            if (session.user.role !== 'partner') {
                return AuthorizationCheck(session, transactions[0].user_id.toString());
            }
        }

        const formattedTransactions = transactions.map((data: any) => {
            const status = { id: data.status.id, ...data.status };
            const addressData = JSON.parse(data.address)

            const transactionLat = parseFloat(addressData.latitude)
            const transactionLng = parseFloat(addressData.longitude)

            const distance = maps.calculateDistance(lat, lng, transactionLat, transactionLng)
            const radius = 30000
            console.log(distance)
            if (distance <= radius) {
                return {
                    id: data.id,
                    user: data.user,
                    address: {
                        address: addressData.address_name,
                    },
                    detailSampah: data.transaction_detail.map((detail: any) => ({
                        id: detail.id,
                        category: detail.trash.category.name,
                    })),
                    time: data.updated_at,
                    status: status,
                };
            } else {
                return null
            }
        }).filter((tr: any) => tr !== null);

        const pagination = {
            total_record: formattedTransactions.length,
            total_pages: Math.ceil(formattedTransactions.length / parseInt(query.limit)),
            next: transactions.length === parseInt(query.limit) ? `/api/v1/transaction/request?limit=${query.limit}&cursor=${transactions[transactions.length - 1].updated_at.toISOString()}` : null,
            previous: query.cursor ? `/api/v1/transaction/request?limit=${-query.limit}cursor=${transactions[transactions.length - 1].updated_at.toISOString()}` : null,
        };

        return { data: formattedTransactions, pagination, status: 200 };
    } catch (error) {
        console.error('Error fetching transaction data:', error);
        return { error: error, status: 500 };
    }
});
