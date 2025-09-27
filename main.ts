// ./main.ts
import { LogEntry, LogColor, LogStyle } from "./src/index";

const parameters = [
    { text: "The code is running!", style: LogStyle.DEBUG },
    { text: "L'utilisateur \"User\" possède 10 items dans son inventaire.", style: LogStyle.INFO },
    { text: "Nouvelle mise à jour disponible sur github.com/PoNexiOFF", style: LogStyle.WARNING },
    { text: "test" },
    { text: "test", color: LogColor.MAGENTA, code: "TESTING" },
    { text: "test", color: LogColor.BRIGHT_YELLOW },
    { color: LogColor.BLUE },
    { text: "give me a OHHHHEAHHHHHHHHHHHHH", color: "UWU" },
    { text: "Nouvelle mise à jour disponible sur github.com/PoNexiOFF", style: LogStyle.WARNING },
];

for (const parameter of parameters) {
    const newLog = new LogEntry(parameter).display();
}
