import { DATA } from "./data.js"
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
          password: await bcrypt.hash(user.password, salt),
          name: user.name,
          email: user.email,
          telp: user.telp,
          avatar: user.avatar,
          role: user.role,
        },
      })
    }

    for (const category of DATA.TRASHCATEGORY) {
      await prisma.trashCategory.create({
        data: {
          id: category.id,
          name: category.name,
          subcategory: category.subcategory,
        },
      })
    }

    for (const trash of DATA.TRASH) {
      await prisma.trash.create({
        data: {
          id: trash.id,
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
          id: status.id,
          name: status.name,
          label: status.label,
          status: status.status,
        },
      })
    }

    for (const notif of DATA.NOTIFICATION) {
      await prisma.notification.create({
        data: {
          title: notif.title,
          description: notif.description,
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
