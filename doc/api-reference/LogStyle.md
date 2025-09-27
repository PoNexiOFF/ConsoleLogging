## LogStyle

Predefined log styles with `color` and `code`:

```ts
type LogStyleKey = 'ERROR' | 'WARNING' | 'INFO' | 'SUCCESS' | 'DEBUG';
type LogStyleValue = { code: string; color: LogColorKey };

const LogStyle: Record<LogStyleKey, LogStyleValue>
```

---

| Key             | Code            | Color           |
|-----------------|-----------------|-----------------|
| ERROR           | ERROR           | RED             |
| WARNING         | WARNING         | YELLOW          |
| INFO            | INFO            | BLUE            |
| SUCCESS         | SUCCESS         | GREEN           |
| DEBUG           | DEBUG           | CYAN            |
