import { defineStore } from 'pinia'
import useCustomMaps from '~/composables/useMap';

const maps = useCustomMaps()

export const useLocationStore = defineStore('location', {
    state: () => {
        return {
            lat: 0,
            lng: 0
        }
    },

    persist: {
        storage: persistedState.localStorage,
    },

    actions: {
        async updateLocation() {
            try {
                console.log('jalanin update')
                const { lat, lng } = await maps.getCurrentLocation();
                this.lat = lat
                this.lng = lng
            } catch (error) {
                console.error('Failed to update location:', error);
            }
        },
    }
})