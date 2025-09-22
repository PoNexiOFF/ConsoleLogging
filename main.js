const { LogEntry, LogColor, LogStyle } = require("./index")

const newLog = new LogEntry({ text: "The log was created successfully and was sent in the console.", style: LogStyle.INFO })
console.log(newLog)
newLog.displayError()