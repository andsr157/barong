
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
        detailSampah: [
            { category: "Alumunium", subcategory: 'Perabot', maxPrice: 1000, minPrice: 1000, weight: 1.0 },
            { category: "Plastik", subcategory: 'Plastik Bening', maxPrice: 500, minPrice: 1500, weight: 1.5 },
            { category: "Kertas", subcategory: 'Hvs', maxPrice: 500, minPrice: 1500, weight: 2.0 },
        ],
        status: "mencari pengepul",
        review: {
            rate: null,
            ulasan: null,
        },
    },
    {
        detailSampah: [
            { category: "Plastik", subcategory: 'Plastik Bening', maxPrice: 500, minPrice: 1500, weight: 1.5 },
            { category: "Alumunium", subcategory: 'Perabot', maxPrice: 1000, minPrice: 1000, weight: 1.0 },
            { category: "Kertas", subcategory: 'Hvs', maxPrice: 500, minPrice: 1500, weight: 2.0 },
        ],
        status: "diambil",
        review: {
            rate: null,
            ulasan: null,
        },
    },
]
export const TRANSACTIONSELESAI = [
    {
        detailSampah: [
            { category: "Alumunium", subcategory: 'Perabot' },
            { category: "Plastik", subcategory: 'Plastik Bening' },
            { category: "Kertas", subcategory: 'Hvs' },
        ],
        status: "selesai",
        review: {
            rate: null,
            ulasan: null,
        },
    },
    {
        detailSampah: [
            { category: "Plastik", subcategory: 'Plastik Bening' },
            { category: "Alumunium", subcategory: 'Perabot' },
            { category: "Kertas", subcategory: 'Hvs' },
        ],
        status: "selesai",
        review: {
            rate: null,
            ulasan: null,
        },
    },
]
export const TRANSACTIONDIBATALKAN = [
    {
        detailSampah: [
            { category: "Alumunium", subcategory: 'Perabot' },
            { category: "Plastik", subcategory: 'Plastik Bening' },
            { category: "Kertas", subcategory: 'Hvs' },
        ],
        status: "dibatalkan",
        review: {
            rate: null,
            ulasan: null,
        },
    },
    {
        detailSampah: [
            { category: "Plastik", subcategory: 'Plastik Bening' },
            { category: "Alumunium", subcategory: 'Perabot' },
            { category: "Kertas", subcategory: 'Hvs' },
        ],
        status: "dibatalkan",
        review: {
            rate: null,
            ulasan: null,
        },
    },
]