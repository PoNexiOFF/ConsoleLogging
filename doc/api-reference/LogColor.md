## LogColor

Represents all available color keys used in logs:

```ts
type LogColorKey =
    | 'RESET'
    | 'BLACK' | 'BRIGHT_BLACK'
    | 'RED' | 'BRIGHT_RED'
    | 'GREEN' | 'BRIGHT_GREEN'
    | 'YELLOW' | 'BRIGHT_YELLOW'
    | 'BLUE' | 'BRIGHT_BLUE'
    | 'MAGENTA' | 'BRIGHT_MAGENTA'
    | 'CYAN' | 'BRIGHT_CYAN'
    | 'WHITE' | 'BRIGHT_WHITE';

const LogColor: Record<LogColorKey, LogColorKey>
```

---

| Key             | Value           |
|-----------------|-----------------|
| RESET           | RESET           |
| BLACK           | BLACK           |
| BRIGHT_BLACK    | BRIGHT_BLACK    |
| RED             | RED             |
| BRIGHT_RED      | BRIGHT_RED      |
| GREEN           | GREEN           |
| BRIGHT_GREEN    | BRIGHT_GREEN    |
| YELLOW          | YELLOW          |
| BRIGHT_YELLOW   | BRIGHT_YELLOW   | 
| BLUE            | BLUE            | 
| BRIGHT_BLUE     | BRIGHT_BLUE     | 
| MAGENTA         | MAGENTA         | 
| BRIGHT_MAGENTA  | BRIGHT_MAGENTA  | 
| CYAN            | CYAN            | 
| BRIGHT_CYAN     | BRIGHT_CYAN     | 
| WHITE           | WHITE           |
| BRIGHT_WHITE    | BRIGHT_WHITE    | 
