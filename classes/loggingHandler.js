// ./classes/loggingHandler.js
const { getColor } = require("../functions/getColors")

class log {
    constructor ({ text, color, code, style } = {}) {
        const colorData = getColor(style || color)

        console.log(colorData.code)

        this.text = text || 'No text provided'
        this.color = colorData === false ? "Color undefined" : colorData.color
        this.code = code || colorData.code
    }
}

module.exports = {
    log
}