// ./lib/typedefs/LogColor.ts

export type LogColorKey =
    | 'RESET'
    | 'RED' | 'BRIGHT_RED'
    | 'GREEN' | 'BRIGHT_GREEN'
    | 'BLUE' | 'BRIGHT_BLUE'
    | 'YELLOW' | 'BRIGHT_YELLOW'
    | 'MAGENTA' | 'BRIGHT_MAGENTA'
    | 'CYAN' | 'BRIGHT_CYAN'
    | 'WHITE' | 'BRIGHT_WHITE';

export type LogColorValue = string;

export const LogColor: Record<LogColorKey, LogColorKey> = {
    RESET: "RESET",
    RED: "RED", BRIGHT_RED: "BRIGHT_RED",
    GREEN: "GREEN", BRIGHT_GREEN: "BRIGHT_GREEN",
    BLUE: "BLUE", BRIGHT_BLUE: "BRIGHT_BLUE",
    YELLOW: "YELLOW", BRIGHT_YELLOW: "BRIGHT_YELLOW",
    MAGENTA: "MAGENTA", BRIGHT_MAGENTA: "BRIGHT_MAGENTA",
    CYAN: "CYAN", BRIGHT_CYAN: "BRIGHT_CYAN",
    WHITE: "WHITE", BRIGHT_WHITE: "BRIGHT_WHITE",
};
