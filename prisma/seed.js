import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seedUser() {
    try {
        await prisma.Users.create({
            data: {
                email: "andika@email.com",
                name: "user1",
                alamat: "jombor"
            },
        }),
            await prisma.Users.create({
                data: {
                    email: "alfi@email.com",
                    name: "user1",
                    alamat: "jombor"
                },
            }),
            await prisma.Users.create({
                data: {
                    email: "july@email.com",
                    name: "user1",
                    alamat: "jombor"
                },
            }),
            await prisma.Users.create({
                data: {
                    email: "najib@email.com",
                    name: "user1",
                    alamat: "jombor"
                },
            })
    } catch (error) {
        console.error("Error seeding users:", error)
    } finally {
        await prisma.$disconnect()
    }
}

seedUser().catch((error) => {
    console.error("Error running seed:", error)
})