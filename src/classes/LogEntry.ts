// ./classes/LogEntry.ts
import { LogColor, LogColorKey } from "../typedefs/LogColor";
import { getColor } from "../functions/getColor";
import { formatDate } from "../functions/formatTime";
import { LogStyle, LogStyleKey, LogStyleValue } from "../typedefs/LogStyle";

export interface LogOptions {
    text?: string;
    color?: string;
    style?: LogStyleValue | null;
    code?: string;
}

export class LogEntry {
    private error: string | false = false;
    public text!: string;
    public color!: string;
    public style: LogStyleValue | null = null;
    public code!: string;
    public date!: Date;

    private static CODE_REGEX = /^[A-Z_]+$/;

    constructor({ text, color, code, style }: LogOptions = {}) {
        this.date = new Date();

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

        const finalCode = style?.code || code || "DEBUG";
        if (!LogEntry.CODE_REGEX.test(finalCode)) {
            this.error = `Invalid code format: \"${finalCode}\". Must match [A-Z_]+.`;
            return;
        }

        this.text = text;
        this.color = finalColor;
        this.style = style || null;
        this.code = finalCode
    }

    display(silent = false) {
        const date = this.date;

        if (this.error !== false) {
            console.log(`${formatDate(date)} ${getColor(LogColor.RED)}[ERROR]${getColor(LogColor.RESET)} ${this.error}`);
        } else {
            console.log(`${formatDate(date)} ${this.color as LogColorKey}[${this.code}]${getColor(LogColor.RESET)} ${this.text}`);
        }

        return { date };
    }

    clone(overrides: Partial<LogOptions> = {}) {
        return new LogEntry({
            text: overrides.text ?? this.text,
            color: overrides.color ?? this.color,
            style: (!overrides.color && !overrides.code) ? (overrides.style ?? this.style) : undefined,
            code: overrides.code ?? this.code,
        })
    }

    toString() {
        const date = this.date;

        let string;
        if (this.error !== false) {
            string = `${formatDate(date)} [ERROR] ${this.error}`;
        } else {
            string = `${formatDate(date)} [${this.code}] ${this.text}`;
        }

        return {
            date,
            string
        }
    }

    toJSON() {
        return {
            date: this.date,
            text: this.text,
            color: this.color,
            code: this.code,
            style: this.style,
            error: this.error || null,
        };
    }
}
