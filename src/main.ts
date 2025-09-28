// ./main.ts
import { LogEntry, LogColor, LogStyle } from "./index";

const parameters = [
    { text: "Server started successfully!", style: LogStyle.SUCCESS },
    { text: "User connected to the server.", style: LogStyle.INFO },
    { text: "High memory usage detected.", style: LogStyle.WARNING },
    { text: "This log has no color or style." },
    { text: "Custom debug message.", color: LogColor.MAGENTA, code: "TESTING" },
    { text: "Attention! Check the system.", color: LogColor.BRIGHT_YELLOW },
    { color: LogColor.BLUE },
    { text: "Trying an invalid color.", color: "INVALIDCOLOR" },
    { text: "Invalid code example.", code: "invalidCode123", color: LogColor.BRIGHT_BLUE }
];

parameters.forEach((param, index) => {
    console.log(`\n--- Test #${index + 1} ---`);
    const log = new LogEntry(param);

    log.display();
    const newLog = log.clone({ style: LogStyle.ERROR });
    newLog.display();
})