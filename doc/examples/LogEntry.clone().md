## Example LogEntry.clone()

```ts
import { LogEntry, LogStyle } from "lcore-cl";

// Original log
const original = new LogEntry({
    text: "Server started",
    style: LogStyle.SUCCESS,
});

// Clone with the same properties
const copy = original.clone();
copy.display();

// Clone with overridden text
const updated = original.clone({ text: "Server restarted" });
updated.display();

// Clone overriding color and code (style ignored)
const custom = original.clone({ color: "\x1b[35m", code: "CUSTOM" });
custom.display();
```

Output: 
```bash
2025-09-26 23:40:00 [SUCCESS] Server started
2025-09-26 23:40:00 [SUCCESS] Server restarted
2025-09-26 23:40:00 [CUSTOM] Server started
```

> [!NOTE]
> Colors are **not displayed** here in GitHub Markdown. They will appear correctly in a terminal that supports ANSI escape codes (e.g., Node.js console).