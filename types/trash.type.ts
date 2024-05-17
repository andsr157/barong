export interface TrashCategory {
    id: string,
    name: string
}
export interface TrashSubCategory {
    id: string,
    name: string,
    minPrice: number,
    maxPrice: number,
    category_id: string
}