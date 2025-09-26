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
    #isValid = false

    /**
    * @param {LogOptions} options
    */
   
    constructor ({ text, color, code, style } = {}) {
        if (!color && !style) {
            new LogEntry({ text: `Missing parameters: "color" or "style"`, style: LogStyle.ERROR }).display()
            return 
        }

        if (!text) {
            new LogEntry({ text: `Missing parameters: "text"`, style: LogStyle.ERROR }).display()
            return 
        }

        const colorData = getColor(style?.color || color)
        if (colorData === false) {
            new LogEntry({ text: `Color not found`, style: LogStyle.ERROR }).display()
            return 
        }

        this.text = text
        this.color = colorData
        this.code = code || style?.code || "DEBUG"
        this.#isValid = true

        if (style) {
            this.style = style
        }
    }

    display() {
        if (this.#isValid === false) return 
        const date = new Date()
        console.log(`${formatDate(date)} ${this.color}[${this.code}]${getColor(LogColor.RESET)} ${this.text}`)
        return {
            date: date
        }
    }
}

module.exports = {
    LogEntry
}