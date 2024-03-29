
export const TRASH_CARD = [
    {
        category: 'Plastik',
        weight: 12,
        color: 'brgPrimary',
        dark: false
    },
    {
        category: 'kertas',
        weight: 10,
        color: 'brgSecondary',
        dark: false
    },
    {
        category: 'Besi',
        weight: 5,
        color: 'brgPrimaryDark',
        dark: false
    },
    {
        category: 'Alumunium',
        weight: 5,
        color: 'brgOrange',
        dark: false
    },
    {
        category: 'Botol Kaca',
        weight: 12,
        color: 'brgWhite',
        dark: true
    },
    {
        category: 'Elektronik',
        weight: 12,
        color: 'brgSecondaryDark',
        dark: false
    },
    {
        category: 'Cair',
        weight: 12,
        color: 'brgBrown',
        dark: false
    },

]


export const TRANSACTION = [
    {
        id: 1,
        user: {
            name: 'July Dwi Saputra',
            telp: '6289627222',
            address: "Tompe, Lorog, Tawangsari",
        },
        pengepul: {},
        address: {
            label: 'Rumah',
            name: 'Andika satrio',
            telp: '+685842106413',
            detail: 'Dk. Tompe Rt.04/02, Lorog, Tawangsari, Sukoharjo, Jawa Tengah 57561'
        },
        trashImage: '/assets/dummy-trash.png',
        detailSampah: [
            { category: "Alumunium", subcategory: 'Perabot', minPrice: 1000, maxPrice: 1500, weight: 1.0, finalPrice: 0 },
            { category: "Plastik", subcategory: 'Plastik Bening', minPrice: 500, maxPrice: 1500, weight: 1.5, finalPrice: 0 },
            { category: "Kertas", subcategory: 'Hvs', minPrice: 500, maxPrice: 1500, weight: 2.0, finalPrice: 0 },
        ],
        totalPrice: null,
        servicePrice: null,
        finalTotalPrice: null,
        status: { name: 'searching', label: 'mencari pengepul', status: 'active' },
        review: {
            rate: null,
            ulasan: null,
        },
        note: 'ini catatan'
    },
    {
        id: 2,
        user: {
            name: 'July Dwi Saputra',
            telp: '6289627222',
            address: "Tompe, Lorog, Tawangsari",
        },
        pengepul: {
            name: 'july dwi',
            telp: "+628965189113",
            rating: 4.5,
            photo: '/assets/dummy-profile.png'
        },
        address: {
            label: 'Kos',
            name: 'Alfiana',
            telp: '+685842106413',
            detail: 'Dk. Tompe Rt.04/02, Lorog, Tawangsari, Sukoharjo, Jawa Tengah 57561'
        },
        trashImage: '/assets/dummy-trash.png',
        detailSampah: [
            { category: "Plastik", subcategory: 'Plastik Bening', minPrice: 500, maxPrice: 1500, weight: 1.5, finalPrice: 0 },
            { category: "Alumunium", subcategory: 'Perabot', minPrice: 1000, maxPrice: 1500, weight: 1.0, finalPrice: 0 },
            { category: "Kertas", subcategory: 'Hvs', minPrice: 500, maxPrice: 1500, weight: 2.0, finalPrice: 0 },
        ],
        totalPrice: null,
        servicePrice: null,
        finalTotalPrice: null,
        status: { name: 'taking', label: 'diambil', status: 'active' },
        review: {
            rate: null,
            ulasan: null,
        },
        note: 'ini catatan'
    },

    {
        id: 3,
        user: {
            name: 'July Dwi Saputra',
            telp: '6289627222',
            address: "Tompe, Lorog, Tawangsari",
        },
        pengepul: {
            name: 'Hasan ',
            telp: "+628965189113",
            rating: 5,
            photo: '/assets/dummy-profile.png'
        },
        address: {
            label: 'Rumah',
            name: 'Andika satrio',
            telp: '+685842106413',
            detail: 'Dk. Tompe Rt.04/02, Lorog, Tawangsari, Sukoharjo, Jawa Tengah 57561'
        },
        trashImage: '/assets/dummy-trash.png',
        detailSampah: [
            { category: "Alumunium", subcategory: 'Perabot', minPrice: 1000, maxPrice: 1500, weight: 1.0, finalPrice: 1000 },
            { category: "Plastik", subcategory: 'Plastik Bening', minPrice: 500, maxPrice: 1500, weight: 1.5, finalPrice: 1000 },
            { category: "Kertas", subcategory: 'Hvs', minPrice: 500, maxPrice: 1500, weight: 2.0, finalPrice: 500 },
        ],
        totalPrice: 3500,
        servicePrice: 500,
        finalTotalPrice: 3000,
        status: { name: 'finish', label: 'selesai', status: 'active' },
        review: {
            rate: null,
            ulasan: null,
        },
        note: 'ini catatan'
    },
    {
        id: 4,
        user: {
            name: 'July Dwi Saputra',
            telp: '6289627222',
            address: "Tompe, Lorog, Tawangsari",
        },
        pengepul: {
            name: 'ervan',
            telp: "+628965189113",
            rating: 4.5,
            photo: '/assets/dummy-profile.png'
        },
        address: {
            label: 'Kantor',
            name: 'Ben ben',
            telp: '+685842106413',
            detail: 'Dk. Tompe Rt.04/02, Lorog, Tawangsari, Sukoharjo, Jawa Tengah 57561'
        },
        trashImage: '/assets/dummy-trash.png',
        detailSampah: [
            { category: "Plastik", subcategory: 'Plastik Bening', minPrice: 500, maxPrice: 1500, weight: 1.5, finalPrice: 1000 },
            { category: "Kertas", subcategory: 'Hvs', minPrice: 500, maxPrice: 1500, weight: 2.0, finalPrice: 500 },
            { category: "Alumunium", subcategory: 'Perabot', minPrice: 1000, maxPrice: 1500, weight: 1.0, finalPrice: 1000 },
        ],
        totalPrice: 3500,
        servicePrice: 500,
        finalTotalPrice: 3000,
        status: { name: 'finish', label: 'selesai', status: 'active' },
        review: {
            rate: null,
            ulasan: null,
        },
        note: 'ini catatan'
    },

    {
        id: 5,
        user: {
            name: 'July Dwi Saputra',
            telp: '6289627222',
            address: "Tompe, Lorog, Tawangsari",
        },
        pengepul: {},
        address: {
            label: 'Rumah',
            name: 'Andika satrio',
            telp: '+685842106413',
            detail: 'Dk. Tompe Rt.04/02, Lorog, Tawangsari, Sukoharjo, Jawa Tengah 57561'
        },
        trashImage: '/assets/dummy-trash.png',
        detailSampah: [
            { category: "Kertas", subcategory: 'Hvs', minPrice: 500, maxPrice: 1500, weight: 2.0, finalPrice: 0 },
            { category: "Alumunium", subcategory: 'Perabot', minPrice: 1000, maxPrice: 1500, weight: 1.0, finalPrice: 0 },
            { category: "Plastik", subcategory: 'Plastik Bening', minPrice: 500, maxPrice: 1500, weight: 1.5, finalPrice: 0 },
        ],
        totalPrice: null,
        servicePrice: null,
        finalTotalPrice: null,
        status: { name: 'canceled', label: 'dibatalkan', status: 'active' },
        review: {
            rate: null,
            ulasan: null,
        },
        note: 'ini catatan'
    },
    {
        id: 6,
        user: {
            name: 'July Dwi Saputra',
            telp: '6289627222',
            address: "Tompe, Lorog, Tawangsari",
        },
        pengepul: {},
        address: {
            label: 'Rumah',
            name: 'Ranuuu',
            telp: '+685842106413',
            detail: 'Dk. Tompe Rt.04/02, Lorog, Tawangsari, Sukoharjo, Jawa Tengah 57561'
        },
        trashImage: '/assets/dummy-trash.png',
        detailSampah: [
            { category: "Plastik", subcategory: 'Plastik Bening', minPrice: 500, maxPrice: 1500, weight: 1.5, finalPrice: 0 },
            { category: "Alumunium", subcategory: 'Perabot', minPrice: 1000, maxPrice: 1500, weight: 1.0, finalPrice: 0 },
            { category: "Kertas", subcategory: 'Hvs', minPrice: 500, maxPrice: 1500, weight: 2.0, finalPrice: 0 },
        ],
        totalPrice: null,
        servicePrice: null,
        finalTotalPrice: null,
        status: { name: 'canceled', label: 'dibatalkan', status: 'active' },
        review: {
            rate: null,
            ulasan: null,
        },
        note: 'ini catatan'
    },
    {
        id: 7,
        user: {
            name: 'July Dwi Saputra',
            telp: '6289627222',
            address: "Tompe, Lorog, Tawangsari",
        },
        pengepul: {},
        address: {
            label: 'Rumah',
            name: 'Ranuuu',
            telp: '+685842106413',
            detail: 'Dk. Tompe Rt.04/02, Lorog, Tawangsari, Sukoharjo, Jawa Tengah 57561'
        },
        trashImage: '/assets/dummy-trash.png',
        detailSampah: [
            { category: "Alumunium", subcategory: 'Perabot', minPrice: 1000, maxPrice: 1500, weight: 1.0, finalPrice: 1000 },
            { category: "Plastik", subcategory: 'Plastik Bening', minPrice: 500, maxPrice: 1500, weight: 1.5, finalPrice: 1000 },
            { category: "Kertas", subcategory: 'Hvs', minPrice: 500, maxPrice: 1500, weight: 2.0, finalPrice: 500 },
        ],
        totalPrice: 3500,
        servicePrice: 500,
        finalTotalPrice: 3000,
        status: { name: 'finish', label: 'selesai', status: 'success' },
        review: {
            rate: 4,
            ulasan: "pengepul sangat ramah",
        },
        note: 'ini catatan'
    },
]
