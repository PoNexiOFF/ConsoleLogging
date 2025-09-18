// ./functions/getColors.js
const colors = require("../data/colors.json")

function getColor(color) {
    if (colors[color]) {
        return colors[color]
    }

    return false
}

module.exports = { getColor }