// plugins/leaflet.client.ts
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet-routing-machine';

export default defineNuxtPlugin(() => {
    return {
        client: true,
        provide: {
            leaflet: L,
        },
    };
});
