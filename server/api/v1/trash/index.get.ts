
import { prisma } from "@/composables/prisma"

export default defineEventHandler(async (event) => {

    const category = await prisma.trashCategory.findMany({
        select: {
            id: true,
            name: true,
        }
    })

    const subcategory = await prisma.trash.findMany({
        include: {
            trashUnit: true
        }
    })

    return { data: { category: category, subcategory: subcategory }, status: 200 }
})