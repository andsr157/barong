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
        const limit = parseInt(query.limit);
        const radius = 30000;

        let latestCursor
        if (query.cursor !== '0') {
            latestCursor = new Date(query.cursor)
        }
        ;
        let formattedTransactions = [];
        let keepFetching = true;
        let pageFlag = 0


        const count = await prisma.transaction.count({
            where: {
                status_id: 'STS1',
            }
        })

        while (keepFetching) {
            const queryPrisma: any = {
                take: limit,
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
            };

            if (latestCursor) {
                queryPrisma['skip'] = 1
                queryPrisma['cursor'] = { updated_at: latestCursor };
            }

            const transactions = await prisma.transaction.findMany(queryPrisma);

            if (!transactions.length) {
                break;
            }
            pageFlag += 1
            for (const data of transactions) {
                const status = { id: data.status.id, ...data.status };
                const addressData = JSON.parse(data.address);

                const transactionLat = parseFloat(addressData.latitude);
                const transactionLng = parseFloat(addressData.longitude);

                const distance = maps.calculateDistance(lat, lng, transactionLat, transactionLng);

                if (distance <= radius) {
                    if (formattedTransactions.length < limit) {
                        formattedTransactions.push({
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
                        });
                    }

                }

            }

            latestCursor = transactions[transactions.length - 1].updated_at;

            if (formattedTransactions.length >= limit || transactions.length < limit) {
                keepFetching = false;
            }
        }


        const total_pages = Math.ceil(count / limit)
        console.log('totalpages', total_pages)
        console.log('flagPages', pageFlag)
        let pagination
        if (total_pages >= pageFlag) {
            pagination = {
                next: formattedTransactions.length >= limit ? `/api/v1/transaction/request?limit=${limit}&cursor=${latestCursor?.toISOString()}` : null,
                pageFlag: pageFlag,
                total_pages: total_pages
            };
        } else {
            pagination = {
                next: null,
                pageFlag: 0,
                total_pages: total_pages
            }
        }
        return { data: formattedTransactions, pagination, status: 200 };
    } catch (error) {
        console.error('Error fetching transaction data:', error);
        return { error: error, status: 500 };
    }
});
