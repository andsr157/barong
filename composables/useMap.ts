interface Coordinates {
    lat: number;
    lng: number;
    heading?: number;
    speed?: number;
    accuracy?: number
}

const useCustomMaps = () => {
    const getCurrentLocation = (): Promise<Coordinates> => {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        resolve({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                            heading: position.coords.heading || 0,
                            speed: position.coords.speed || 0,
                            accuracy: position.coords.accuracy
                        });
                    },
                    (error) => {
                        reject(error);
                    }
                );
            } else {
                reject(new Error('Geolocation is not supported by your browser'));
            }
        });
    }

    const deg2rad = (deg: number): number => {
        return deg * (Math.PI / 180);
    };

    const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
        const R = 6371;
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c;
        return Math.round(d * 100) / 100;
    };
    return { getCurrentLocation, calculateDistance };
}

export default useCustomMaps