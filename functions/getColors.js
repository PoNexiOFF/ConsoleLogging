// ./functions/getColors.js
const colors = require("../data/colors.json")
const styles = require("../data/styles.json")

function getColor(color) {
    if (styles[color]) {
        if (colors[styles[color].color]) {
            return {
                code: styles[color].code,
                color: colors[styles[color].color]
            }
        }
    } else {
        if (colors[color]) {
            return {
                code: "DEBUG",
                color: colors[color]
            }
        }
    }

    return false
}

module.exports = { getColor }