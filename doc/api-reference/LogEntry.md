## LogEntry

The main class to create a log entry:

```ts
interface LogOptions {
  text?: string;             // Message text (required)
  color?: string;            // Optional color (string from LogColorKey)
  style?: LogStyleValue;     // Optional predefined style
  code?: string;             // Optional custom log code
}

class LogEntry {
  constructor(options?: LogOptions)
  
  /**
   * Prints the log to console with timestamp and color.
   * @param silent - If true, only returns the log object without printing
   * @returns An object containing the log date
   */
  display(silent?: boolean): { date: Date }
}
```

`display()` prints the formatted log with timestamp and color in the console.

> [!WARNING]
> If text or color/style is missing, it will log an error.