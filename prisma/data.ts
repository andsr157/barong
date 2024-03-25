export const DATA = {
    USER: [
        {
            name: 'andika',
            password: 'andika123',
            email: 'andik@gmail.com',
            telp: '85842106413',
            avatar: '/assets/dummy-profile.png',
            address: 'jombor',

        },
        {
            name: 'july',
            password: 'july123',
            email: 'jyuly@gmail.com',
            telp: '85842106413',
            avatar: '/assets/dummy-profile.png',
            address: 'jombor',

        },
        {
            name: 'dwi',
            password: 'dwi123',
            email: 'dwi@gmail.com',
            telp: '85842106413',
            avatar: '/assets/dummy-profile.png',
            address: 'jombor',

        },
        {
            name: 'hasan najib',
            password: 'hasan123',
            email: 'san@gmail.com',
            telp: '85842106413',
            avatar: '/assets/dummy-profile.png',
            address: 'jombor',

        },
        {
            name: 'saputra dwi',
            password: 'saputra123',
            email: 'saputra@gmail.com',
            telp: '85842106413',
            avatar: '/assets/dummy-profile.png',
            address: 'jombor',

        },

    ],
    ADDRESS: [
        {
            label: 'kost',
            addess_name: 'gabahan, sukoharjo ',
            detail: 'dekat perempatan',
            owner_name: 'andika',
            owner_telp: '85842106413',
            latitude: '1113334455',
            longitude: '111226677',
            user_id: '1',
        },
        {
            label: 'sekolah',
            addess_name: 'gabahan, sukoharjo ',
            detail: 'dekat perempatan',
            owner_name: 'july',
            owner_telp: '85842106413',
            latitude: '1113334455',
            longitude: '111226677',
            user_id: '2',
        },
        {
            label: 'kost',
            addess_name: 'gabahan, sukoharjo ',
            detail: 'dekat perempatan',
            owner_name: 'hasan',
            owner_telp: '85842106413',
            latitude: '1113334455',
            longitude: '111226677',
            user_id: '3',
        },
    ],
    TRASHCATEGORY: [
        {
            name: 'Plastik',
        },
        {
            name: 'Besi',
        },
        {
            name: 'Kertas',
        },
        {
            name: 'Cair',
        },
        {
            name: 'Elektronik',
        },
        {
            name: 'Alumunium',
        },
        {
            name: 'Botol Kaca',
        },
    ],
    TRASH: [
        {
            name: 'botol plastik bening',
            minPrice: 500,
            maxPrice: 1000,
            category_id: 1,
        },
        {
            name: 'kertas hvs',
            minPrice: 300,
            maxPrice: 700,
            category_id: 3,
        },
        {
            name: 'paku bekas',
            minPrice: 500,
            maxPrice: 1000,
            category_id: 2,
        },
        {
            name: 'tv bekas',
            minPrice: 1000,
            maxPrice: 3000,
            category_id: 5,
        },
    ],
    STATUS: [
        {
            name: 'searching',
            label: 'mencari pengepul',
            status: 'active',

        },
        {
            name: 'taking',
            label: 'diambil',
            status: 'active',

        },
        {
            name: 'finish',
            label: 'selesai',
            status: 'active',

        },
        {
            name: 'finish',
            label: 'selesai',
            status: 'success',

        },
    ],
    TRANSACTION: [
        {
            user_id: 1,
            partner_id: 1,
            address_id: 1,
            image: 'image.png',
            status_id: 1,
            partner_rate: 4,
            partner_review: 'baik sekali',
            note: 'andika ganteng',
            total: 10,

        },
        {
            user_id: 2,
            partner_id: 2,
            address_id: 2,
            image: 'image.png',
            status_id: 2,
            partner_rate: 5,
            partner_review: 'baik sekali',
            note: 'andika ganteng',
            total: 7,

        },
        {
            user_id: 3,
            partner_id: 3,
            address_id: 3,
            image: 'image.png',
            status_id: 3,
            partner_rate: 3,
            partner_review: 'baik sekali',
            note: 'andika ganteng',
            total: 12,

        },
    ],
    TRANSACTION_DETAIL: [
        {
            trash_id: 1,
            price: 1000,
            weight: 2,
            transaction_id: 1,
        },
        {
            trash_id: 2,
            price: 1000,
            weight: 2,
            transaction_id: 2,
        },
        {
            trash_id: 3,
            price: 1000,
            weight: 2,
            transaction_id: 3,
        },
        {
            trash_id: 4,
            price: 1000,
            weight: 2,
            transaction_id: 3,
        },
    ],

}