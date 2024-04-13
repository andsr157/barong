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
        address: string
        name: string
        telp: string
        detail: string
    },
    trashImage: string
    detailSampah: {
        id?: number,
        trash_id: number;
        category: string,
        subcategory: string,
        weight: number;
        minPrice?: number
        maxPrice?: number
        finalPrice?: number
    }[]
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


//transaction form data type
export interface Transaction {
    id: number;
    user: {
        name: string;
        telp: string;
        address: string;
    };
}

export interface TransactionDetail {
    id?: number,
    trash_id: number;
    category: string,
    subcategory: string,
    weight: number;
    minPrice?: number
    maxPrice?: number
    finalPrice?: number
}
export interface TransactionData {
    transaction: {
        id?: number,
        user_id: number;
        address_id: number;
        // image: string;
        status_id: number;
        note: string;
    };
    transaction_detail: TransactionDetail[];
}

export interface TransactionImage {
    image: null | any
    imageUrl: string
}