export const formatRelativeTime = (date: Date) => {
    const now = new Date();
    const diffMilliseconds = now.getTime() - date.getTime();

    type TimeUnit = {
        unit: Intl.RelativeTimeFormatUnit;
        milliseconds: number;
    };

    const units: TimeUnit[] = [
        { unit: 'year', milliseconds: 1000 * 60 * 60 * 24 * 365 },
        { unit: 'month', milliseconds: 1000 * 60 * 60 * 24 * (365 / 12) },
        { unit: 'day', milliseconds: 1000 * 60 * 60 * 24 },
        { unit: 'hour', milliseconds: 1000 * 60 * 60 },
        { unit: 'minute', milliseconds: 1000 * 60 },
        { unit: 'second', milliseconds: 1000 }
    ];

    for (const difference of units) {
        if (Math.abs(diffMilliseconds) >= difference.milliseconds) {
            const rtf = new Intl.RelativeTimeFormat('pt-BR', {
                numeric: 'auto'
            });
            return rtf.format(Math.round(diffMilliseconds / difference.milliseconds), difference.unit);
        }
    }
    return 'agora';
}
