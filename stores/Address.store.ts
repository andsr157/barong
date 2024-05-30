import { defineStore } from "pinia";
import { type Address, type Center } from "~/types/address.type";
import axios from 'axios'



export const useAddressStore = defineStore('Address-store', {
    state: () => ({
        center: {
            lat: 0,
            lng: 0
        } as Center,
        generatedAddress: '',
        mapRef: null as any,
        address: [] as Address[],
        formAdress: {} as Address,
        mainAddress: { data: [] } as any,
        isLoading: false
    }),

    actions: {
        async getLocationAdress(lat: number, lng: number) {
            try {
                const res = await axios.get(
                    `https://nominatim.openstreetmap.org/reverse?&lat=${lat}&lon=${lng}&format=json`
                );
                this.generatedAddress = res.data.display_name;
            } catch (error) {
                console.error(error);
                return '';
            }
        },

        async getAddress() {
            try {
                this.isLoading = true
                const res = await axios.get('/api/v1/address')
                if (res.data.status === 200) {
                    this.address = res.data.data
                    console.log(this.formAdress)
                }
                this.isLoading = false
                return Promise.resolve(res.data)
            } catch (error) {
                console.error('error')
            }
        },

        async addAddress() {
            try {
                this.isLoading = true
                const { id, ...payload } = this.formAdress
                const res = await axios.post('/api/v1/address', payload)
                if (res.data.status === 200) {
                    this.isLoading = false
                }
                return Promise.resolve(res.data)
            } catch (error) {
                console.error(error)
            }
        },

        async updateAddress() {
            try {
                const res = await axios.put("/api/v1/address", this.formAdress)
                return Promise.resolve(res.data)
            } catch (error) {
                console.error(error)
            }
        },

        async deleteAddress(id: string) {
            try {
                const res = await axios.delete(`/api/v1/address/${id}`)
                return Promise.resolve(res.data)
            } catch (error) {
                console.error(error)
            }
        },

        async setMainAddress(payload: any) {
            try {
                const res = await axios.put('/api/v1/address/main', payload)
                return Promise.resolve(res.data)
            } catch (error) {
                console.error(error)
            }
        },

        setForm(id: string) {
            const data = this.address.find((data: Address) => data.id === id);
            console.log(data)
            if (data) {
                console.log('jalan')
                this.formAdress = data
                console.log(this.formAdress)
            }
        },

        setDefaultFormAddress() {
            const defaultValues: Partial<Address> = {
                id: null,
                label: '',
                address_name: '',
                detail: '',
                owner_name: '',
                owner_telp: '',
                latitude: '',
                longitude: '',
                is_main: false
            };

            this.formAdress.id = defaultValues.id ?? this.formAdress.id;
            this.formAdress.label = defaultValues.label ?? this.formAdress.label;
            this.formAdress.address_name = defaultValues.address_name ?? this.formAdress.address_name;
            this.formAdress.detail = defaultValues.detail ?? this.formAdress.detail;
            this.formAdress.owner_name = defaultValues.owner_name ?? this.formAdress.owner_name;
            this.formAdress.owner_telp = defaultValues.owner_telp ?? this.formAdress.owner_telp;
            this.formAdress.latitude = defaultValues.latitude ?? this.formAdress.latitude;
            this.formAdress.longitude = defaultValues.longitude ?? this.formAdress.longitude;
            this.formAdress.is_main = defaultValues.is_main ?? this.formAdress.is_main;
            console.log(this.formAdress)
        },



        async getCurrentLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    this.center = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    if (this.mapRef) {
                        this.mapRef.leafletObject.setView(this.center, 1000);
                    }
                    const address = await this.getLocationAdress(this.center.lat, this.center.lng);
                });
            }
        }
    }
});
