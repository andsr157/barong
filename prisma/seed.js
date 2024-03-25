import { DATA } from "./data"
import { PrismaClient } from "@prisma/client"
import { v4 as uuidv4 } from "uuid"
import bcrypt from "bcrypt"
const prisma = new PrismaClient()

const salt = await bcrypt.genSalt(10)
async function seedUser() {
    try {
        for (const user of DATA.USERS) {
            await prisma.users.create({
                data: {
                    uuid: uuidv4(),
                    password: await bcrypt.hash(user.password, salt),
                    name: user.name,
                    email: user.email,
                    telp: user.telp,
                    avatar: user.avatar,
                },
            })
        }

        for (const address of DATA.ADDRESS) {
            await prisma.address.create({
                data: {
                    label: address.label,
                    address_name: address.address_name,
                    detail: address.detail,
                    owner_name: address.owner_name,
                    owner_telp: address.owner_telp,
                    latitude: address.latitude,
                    longitude: address.longitude,
                    user_id: address.user_id,
                },
            })
        }

        for (const category of DATA.TRASHCATEGORY) {
            await prisma.trashCategory.create({
                data: {
                    name: category.name,
                    subcategory: category.subcategory,
                },
            })
        }

        for (const trash of DATA.TRASH) {
            await prisma.trash.create({
                data: {
                    name: trash.name,
                    minPrice: trash.minPrice,
                    maxPrice: trash.maxPrice,
                    category_id: trash.category_id,
                },
            })
        }

        for (const status of DATA.STATUS) {
            await prisma.status.create({
                data: {
                    name: status.name,
                    label: status.label,
                    status: status.status,
                },
            })
        }

        for (const transaction of DATA.TRANSACTION) {
            await prisma.transaction.create({
                data: {
                    user_id: transaction.user_id,
                    partner_id: transaction.partner_id,
                    address_id: transaction.address_id,
                    image: transaction.image,
                    status_id: transaction.status_id,
                    partner_rate: transaction.partner_rate,
                    partner_review: transaction.partner_review,
                    note: transaction.note,
                    total: transaction.total,
                },
            })
        }

        for (const detail of DATA.TRANSACTION_DETAIL) {
            await prisma.transaction_detail.create({
                data: {
                    trash_id: detail.trash_id,
                    price: detail.price,
                    weight: detail.weight,
                    transaction_id: detail.transaction_id
                },
            })
        }
    } catch (error) {
        console.error("Error seeding users:", error)
    } finally {
        await prisma.$disconnect()
    }
}

seedUser().catch((error) => {
    console.error("Error running seed:", error)
})
