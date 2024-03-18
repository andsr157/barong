
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
        detailSampah: [
            { category: "Alumunium", subcategory: 'Perabot', minPrice: 1000, maxPrice: 1500, weight: 1.0 },
            { category: "Plastik", subcategory: 'Plastik Bening', minPrice: 500, maxPrice: 1500, weight: 1.5 },
            { category: "Kertas", subcategory: 'Hvs', minPrice: 500, maxPrice: 1500, weight: 2.0 },
        ],
        status: { name: 'searching', label: 'mencari pengepul', status: 'active' },
        review: {
            rate: null,
            ulasan: null,
        },
    },
    {
        id: 2,
        user: {
            name: 'July Dwi Saputra',
            telp: '6289627222',
            address: "Tompe, Lorog, Tawangsari",
        },
        detailSampah: [
            { category: "Kertas", subcategory: 'Hvs', minPrice: 500, maxPrice: 1500, weight: 2.0 },
            { category: "Alumunium", subcategory: 'Perabot', minPrice: 1000, maxPrice: 1500, weight: 1.0 },
            { category: "Plastik", subcategory: 'Plastik Bening', minPrice: 500, maxPrice: 1500, weight: 1.5 },
        ],
        status: { name: 'taking', label: 'diambil', status: 'active' },
        review: {
            rate: null,
            ulasan: null,
        },
    },

    {
        id: 3,
        user: {
            name: 'July Dwi Saputra',
            telp: '6289627222',
            address: "Tompe, Lorog, Tawangsari",
        },
        detailSampah: [
            { category: "Alumunium", subcategory: 'Perabot', minPrice: 1000, maxPrice: 1500, weight: 1.0 },
            { category: "Plastik", subcategory: 'Plastik Bening', minPrice: 500, maxPrice: 1500, weight: 1.5 },
            { category: "Kertas", subcategory: 'Hvs', minPrice: 500, maxPrice: 1500, weight: 2.0 },
        ],
        status: { name: 'finish', label: 'selesai', status: 'active' },
        review: {
            rate: null,
            ulasan: null,
        },
    },
    {
        id: 4,
        user: {
            name: 'July Dwi Saputra',
            telp: '6289627222',
            address: "Tompe, Lorog, Tawangsari",
        },
        detailSampah: [
            { category: "Plastik", subcategory: 'Plastik Bening', minPrice: 500, maxPrice: 1500, weight: 1.5 },
            { category: "Alumunium", subcategory: 'Perabot', minPrice: 1000, maxPrice: 1500, weight: 1.0 },
            { category: "Kertas", subcategory: 'Hvs', minPrice: 500, maxPrice: 1500, weight: 2.0 },
        ],
        status: { name: 'finish', label: 'selesai', status: 'active' },
        review: {
            rate: null,
            ulasan: null,
        },
    },

    {
        id: 5,
        user: {
            name: 'July Dwi Saputra',
            telp: '6289627222',
            address: "Tompe, Lorog, Tawangsari",
        },
        detailSampah: [
            { category: "Kertas", subcategory: 'Hvs', minPrice: 500, maxPrice: 1500, weight: 2.0 },
            { category: "Alumunium", subcategory: 'Perabot', minPrice: 1000, maxPrice: 1500, weight: 1.0 },
            { category: "Plastik", subcategory: 'Plastik Bening', minPrice: 500, maxPrice: 1500, weight: 1.5 },
        ],
        status: { name: 'canceled', label: 'dibatalkan', status: 'active' },
        review: {
            rate: null,
            ulasan: null,
        },
    },
    {
        id: 6,
        user: {
            name: 'July Dwi Saputra',
            telp: '6289627222',
            address: "Tompe, Lorog, Tawangsari",
        },
        detailSampah: [
            { category: "Plastik", subcategory: 'Plastik Bening', minPrice: 500, maxPrice: 1500, weight: 1.5 },
            { category: "Alumunium", subcategory: 'Perabot', minPrice: 1000, maxPrice: 1500, weight: 1.0 },
            { category: "Kertas", subcategory: 'Hvs', minPrice: 500, maxPrice: 1500, weight: 2.0 },
        ],
        status: { name: 'canceled', label: 'dibatalkan', status: 'active' },
        review: {
            rate: null,
            ulasan: null,
        },
    },
]
