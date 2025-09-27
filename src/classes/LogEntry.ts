// ./classes/LogEntry.ts
import { LogColor, LogColorKey } from "../typedefs/LogColor";
import { getColor } from "../functions/getColor";
import { formatDate } from "../functions/formatTime";
import { LogStyle, LogStyleKey, LogStyleValue } from "../typedefs/LogStyle";

export interface LogOptions {
    text?: string;
    color?: string;
    style?: LogStyleValue;
    code?: string;
}

export class LogEntry {
    private error: string | false = false;
    public text!: string;
    public color!: string;
    public style: LogStyleValue | null = null;
    public code!: string;

    constructor({ text, color, code, style }: LogOptions = {}) {
        if (!color && !style) {
            this.error = `Missing parameters: "color" or "style"`;
            return;
        }
        if (!text) {
            this.error = `Missing parameters: "text"`;
            return;
        }

        const finalColor = getColor((style?.color || color) as LogColorKey)
        if (!finalColor) {
            this.error = `Color not found`;
            return;
        }

        this.text = text;
        this.color = finalColor;
        this.style = style || null;
        this.code = code || style?.code || "DEBUG";
    }

    display(silent = false) {
        const date = new Date();

        if (this.error !== false) {
            console.log(`${formatDate(date)} ${getColor(LogColor.RED)}[ERROR]${getColor(LogColor.RESET)} ${this.error}`);
        } else {
            console.log(`${formatDate(date)} ${this.color as LogColorKey}[${this.code}]${getColor(LogColor.RESET)} ${this.text}`);
        }

        return { date };
    }
}
