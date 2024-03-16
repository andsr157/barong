
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
            { category: "Alumunium", subcategory: 'Perabot' },
            { category: "Plastik", subcategory: 'Plastik Bening' },
            { category: "Kertas", subcategory: 'Hvs' },
        ],
        status: "mencari pengepul",
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