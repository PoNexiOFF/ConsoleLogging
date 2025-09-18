const { LogEntry, LogColor, LogStyle } = require("./index")

const newLog = new LogEntry({ text: "text", color: LogColor.YELLOW })
console.log(newLog)
newLog.displayError()