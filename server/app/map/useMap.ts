interface Coordinates {
    lat: number;
    lng: number;
}

const useCustomMaps = () => {


    // Fungsi untuk menghitung jarak antara dua lokasi
    const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
        console.log(lat1)
        console.log(lat2)
        console.log(lon1)
        console.log(lon2)
        const R = 6371;
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c;
        return d * 1000;
    };

    const deg2rad = (deg: number): number => {
        return deg * (Math.PI / 180);
    };

    return {
        calculateDistance
    };
};

export default useCustomMaps;
