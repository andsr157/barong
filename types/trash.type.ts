export interface TrashCategory {
    id: number,
    name: string
}

export interface TrashSubCategory {
    id: number,
    name: string,
    minPrice: number,
    maxPrice: number,
    category_id: number
}