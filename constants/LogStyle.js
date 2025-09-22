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
        color: LogColor.RED,
    },

    WARNING: {
        code: "WARN",
        color: LogColor.YELLOW,
    },

    INFO: {
        code: "INFO",
        color: LogColor.BLUE,
    },

    SUCCESS: {
        code: "SUCCESS",
        color: LogColor.GREEN,
    },

    DEBUG: {
        code: "DEBUG",
        color: LogColor.CYAN,
    },
};

module.exports = { LogStyle };
