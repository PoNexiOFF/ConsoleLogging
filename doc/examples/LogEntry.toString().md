## Example - LogEntry.toString()

```ts
import { LogEntry, LogStyle } from "./index";

const log = new LogEntry({
    text: "Database connected",
    style: LogStyle.INFO,
});

// Convert log entry to string
const result = log.toString();
console.log(result);
console.log(result.string)
```

Output: 
```bash
{
    date: 2025-09-28T18:57:17.255Z,
    string: "2025-09-26 23:42:10 [INFO] Database connected"
}

2025-09-26 23:42:10 [INFO] Database connected
```

[!NOTE]
> toString() returns an object with { date, string }.
> Useful if you want both the timestamp as a Date object and the full log line as plain text.