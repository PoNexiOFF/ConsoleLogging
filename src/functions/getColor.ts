// ./functions/getColors.ts
import colorsJson from "../data/colors.json";
import { LogColorKey } from "../typedefs/LogColor";

export function getColor(color: LogColorKey): string | false {
    if (colorsJson[color]) return colorsJson[color];
    return false;
}
