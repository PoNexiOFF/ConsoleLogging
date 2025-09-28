## Example - LogEntry.display()

```ts
// Import the main logging components
import { LogEntry, LogColor, LogStyle } from "./index";

// Define an array of log entries with different styles and colors
const logs = [
  { text: "Server started!", style: LogStyle.SUCCESS }, // Using a predefined style (SUCCESS) – color and code are automatically applied
  { text: "User connected", style: LogStyle.INFO }, // Using a predefined style (INFO)
  { text: "Warning: High memory usage", style: LogStyle.WARNING }, // Using a predefined style (WARNING)
  { text: "Custom message", color: LogColor.MAGENTA, code: "CUSTOM" }, // Using a custom color and custom code instead of predefined style
];

// Iterate over each log entry, create a LogEntry instance, and display it
logs.forEach(l => new LogEntry(l).display());
```

Output: 
```bash
2025-09-26 23:30:12 [SUCCESS] Server started!
2025-09-26 23:30:12 [INFO] User connected
2025-09-26 23:30:12 [WARN] Warning: High memory usage
2025-09-26 23:30:12 [CUSTOM] Custom message
```

> [!NOTE]
> Colors are **not displayed** here in GitHub Markdown. They will appear correctly in a terminal that supports ANSI escape codes (e.g., Node.js console).