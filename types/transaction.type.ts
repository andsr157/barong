export interface Transaction {
    id: string
    chats_id: number,
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
    id: string;
    user: {
        name: string;
        telp: string;
        address: string;
    };
}

export interface TransactionDetail {
    id?: string,
    trash_id: number;
    category: string,
    subcategory: string,
    weight: number;
    minPrice?: number
    maxPrice?: number
    finalPrice?: number
}

export interface Address {
    id?: string | null,
    label: string,
    owner_name: string,
    address_name: string,
    owner_telp: string,
    detail: string,
    latitude: string,
    longitude: string
}
export interface TransactionData {
    transaction: {
        id?: string | null,
        user_id: string | null,
        address: Address,
        chats_id?: string | null,
        // image: string;
        status_id: string | null,
        note: string,
    };
    transaction_detail: TransactionDetail[],
}

export interface TransactionImage {
    image: null | any
    imageUrl: string
}