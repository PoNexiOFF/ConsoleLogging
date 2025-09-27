// ./functions/formatTime.ts
export function formatDate(date: Date): string {
    const pad = (n: number) => n.toString().padStart(2, '0');
    const Y = date.getFullYear();
    const M = pad(date.getMonth() + 1);
    const D = pad(date.getDate());
    const h = pad(date.getHours());
    const m = pad(date.getMinutes());
    const s = pad(date.getSeconds());
    return `${Y}-${M}-${D} ${h}:${m}:${s}`;
}
