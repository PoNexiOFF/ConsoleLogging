// ./classes/loggingHandler.js
const { LogColor } = require("../constants/LogColor")
const { getColor } = require("../functions/getColors")
const { formatDate } = require("../functions/formatTime")
const { LogStyle } = require("../constants/LogStyle")

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
        this.text = text
        this.color = color
        this.style = style
        this.code = code || style?.code || "DEBUG"
    }

    display() {
        if (!this.color && !this.style) {
            return new LogEntry({ text: "Missing parameters: \"style\" and \"color\"", style: LogStyle.ERROR }).display()
        }

        if (!this.text) {
            throw new Error("No text provided")
        }

        const colorData = getColor(this.style?.color || this.color)
        if (colorData === false) {
            throw new Error("No color found")
        }
        this.color = colorData

        return console.log(`${formatDate(new Date())} ${this.color}[${this.code}]${getColor(LogColor.RESET)} ${this.text}`)
    }
}

module.exports = {
    LogEntry
}