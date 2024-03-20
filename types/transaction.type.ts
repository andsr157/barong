export interface Transaction {
    id: number
    user: {
        name: string
        telp: string
        address: string
    },
    pengepul: {},
    address: {
        label: string
        name: string
        telp: string
        detail: string
    },
    trashImage: string
    detailSampah: { category: string, subcategory: string, minPrice: number, maxPrice: number, weight: number, finalPrice: number }[]
    totalPrice: number | null
    servicePrice: number | null
    finalTotalPrice: number | null
    status: { name: string, label: string, status: string }
    review: {
        rate: number | null
        ulasan: string | null
    }
    note: string
}