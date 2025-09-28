## Example - LogEntry.toJSON()

```ts
import { LogEntry, LogStyle } from "./index";

const log = new LogEntry({
    text: "Critical error",
    style: LogStyle.ERROR,
});

// Convert log entry to JSON
const json = log.toJSON();
console.log(JSON.stringify(json, null, 2));
```

Output: 
```bash
{
  "date": "2025-09-26T21:43:55.000Z",
  "text": "Critical error",
  "color": "\u001b[31m",
  "code": "ERROR",
  "style": {
    "code": "ERROR",
    "color": "RED"
  },
  "error": null
}
```