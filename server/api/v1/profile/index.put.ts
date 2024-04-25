import { prisma } from '~/composables/prisma'

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    try {
        const updatedProfile = await prisma.users.update({
            where: {
                id: body.id
            },
            data: {
                name: body.name,
                telp: body.telp,

            },
        });
        return updatedProfile

    } catch (error) {
        // Menangani kesalahan yang mungkin terjadi selama pembaruan profile
        console.error('Error updating profile:', error);
        throw new Error('Error updating profile');
    }
});
