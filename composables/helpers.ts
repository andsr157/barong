export function toCurrency(value: number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value)
}

export function formatSampah(detailSampah: any) {
    if (detailSampah.length <= 2) {
        return detailSampah.map((sampah: Record<string, any>) => sampah.category).join(', ');
    } else {
        const firstSampah = detailSampah[0].category;
        const remainingCount = detailSampah.length - 1;
        return `${firstSampah}, dan ${remainingCount} lainnya`;
    }
}

export function estimateTotal(TrashData: any): number[] {
    const min = TrashData.reduce(
        (total: number, data: any) => total + data.minPrice * data.weight,
        0
    )
    const max = TrashData.reduce(
        (total: number, data: any) => total + data.maxPrice * data.weight,
        0
    )

    return [min, max]
}

export function convertToTime(dateTimeString: string) {
    const date = new Date(dateTimeString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}