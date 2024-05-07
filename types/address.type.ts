export interface Address {
    id?: string | null,
    label: string,
    address_name: string,
    detail: string,
    owner_name: string,
    owner_telp: string,
    latitude: string,
    longitude: string,
    is_main: Boolean
}

export interface Center {
    lat: number;
    lng: number;
}