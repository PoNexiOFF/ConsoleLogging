// ./classes/LogEntry.js
const { LogColor } = require("../typedefs/LogColor")
const { getColor } = require("../functions/getColors")
const { formatDate } = require("../functions/formatTime")
const { LogStyle } = require("../typedefs/LogStyle")

/**
* @typedef {Object} LogOptions
* @property {string} text
* @property {string} [color]
* @property {string} [style]
* @property {string} [code]
*/

class LogEntry {
    #error = false

    /**
    * @param {LogOptions} options
    */
   
    constructor ({ text, color, code, style } = {}) {
        if (!color && !style) {
            this.#error = `Missing parameters: "color" or "style"`;
            return 
        }

        if (!text) {
            this.#error = `Missing parameters: "text"`; 
            return
        }

        const colorData = getColor(style?.color || color)
        if (colorData === false) {
            this.#error = `Color not found`;
            return 
        }

        this.text = text
        this.color = colorData
        this.style = style || null
        this.code = code || style?.code || "DEBUG"
    }

    display(silent = false) {
        const date = new Date()

        if (this.#error !== false) {
            console.log(`${formatDate(date)} ${getColor(LogColor.RED)}[ERROR]${getColor(LogColor.RESET)} ${this.#error}`)
        } else {
            console.log(`${formatDate(date)} ${this.color}[${this.code}]${getColor(LogColor.RESET)} ${this.text}`)
        }

        return {
            date: date
        }
    }
}

module.exports = {
    LogEntry
}