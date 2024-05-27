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

export function convertToDate(dateTimeString: string): string {
    const months: string[] = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const date = new Date(dateTimeString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}

export function timeAgo(inputDate: string): string {
    const date = new Date(inputDate);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const intervals = {
        tahun: 365 * 24 * 60 * 60,
        bulan: 30 * 24 * 60 * 60,
        hari: 24 * 60 * 60,
        jam: 60 * 60,
        menit: 60,
    };

    if (diffInSeconds < intervals.menit) {
        return "baru saja";
    }

    if (diffInSeconds < intervals.jam) {
        const minutes = Math.floor(diffInSeconds / intervals.menit);
        return minutes === 1 ? `1 menit lalu` : `${minutes} menit lalu`;
    }

    for (const interval in intervals) {
        const seconds = intervals[interval as keyof typeof intervals];
        const quotient = Math.floor(diffInSeconds / seconds);
        if (quotient >= 1) {
            return quotient === 1 ? `1 ${interval} lalu` : `${quotient} ${interval} lalu`;
        }
    }

    return "baru saja";
}

