const { LogColor } = require("./LogColor");

/**
 * @typedef {'ERROR' | 'WARNING' | 'INFO' | 'SUCCESS' | 'DEBUG'} LogStyleKey
 */

/**
 * @type {{ [key in LogStyleKey]: { code: string, color: string } }}
 */
const LogStyle = {
    ERROR: {
        code: "ERROR",
        color: LogColor.BRIGHT_RED,
    },

    WARNING: {
        code: "WARN",
        color: LogColor.BRIGHT_YELLOW,
    },

    INFO: {
        code: "INFO",
        color: LogColor.BRIGHT_BLUE,
    },

    SUCCESS: {
        code: "SUCCESS",
        color: LogColor.BRIGHT_GREEN,
    },

    DEBUG: {
        code: "DEBUG",
        color: LogColor.BRIGHT_CYAN,
    },
};

module.exports = { LogStyle };
