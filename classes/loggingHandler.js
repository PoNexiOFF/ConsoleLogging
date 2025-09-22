// ./classes/loggingHandler.js
const { LogColor } = require("../constants/LogColor")
const { getColor } = require("../functions/getColors")
const { formatDate } = require("../functions/formatTime")

/**
* @typedef {Object} LogOptions
* @property {string} text
* @property {string} [color]
* @property {string} [style]
* @property {string} [code]
*/

class LogEntry {
    /**
    * @param {LogOptions} options
    */
    constructor ({ text, color, code, style } = {}) {
        if (!color && !style) {
            throw new Error("No color or style provided")
        }

        if (!text) {
            throw new Error("No text provided")
        }

        this.text = text
        const colorData = getColor(style?.color || color)
        if (colorData === false) {
            throw new Error("No color found")
        }

        this.color = colorData
        this.code = code || style?.code || "DEBUG"
    }

    displayError() {
        return console.log(`${formatDate(new Date())} ${this.color}[${this.code}]${getColor(LogColor.RESET)} ${this.text}`)
    }
}

module.exports = {
    LogEntry
}