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
