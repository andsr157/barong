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
    return { getCurrentLocation };
}

export default useCustomMaps