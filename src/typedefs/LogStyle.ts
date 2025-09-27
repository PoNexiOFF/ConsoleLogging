// ./lib/typedefs/LogStyle.ts
import { LogColor } from "./LogColor";

export type LogStyleKey = 'ERROR' | 'WARNING' | 'INFO' | 'SUCCESS' | 'DEBUG';

export type LogStyleValue = { code: string; color: keyof typeof LogColor };

export const LogStyle: Record<LogStyleKey, LogStyleValue> = {
    ERROR: { code: "ERROR", color: LogColor.RED },
    WARNING: { code: "WARN", color: LogColor.YELLOW },
    INFO: { code: "INFO", color: LogColor.BLUE },
    SUCCESS: { code: "SUCCESS", color: LogColor.GREEN },
    DEBUG: { code: "DEBUG", color: LogColor.CYAN },
};
