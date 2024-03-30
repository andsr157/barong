export interface TrashCategory {
    id: number,
    name: string
}

export interface TrashSubCategory {
    id: number,
    name: string
    category_id: number
}