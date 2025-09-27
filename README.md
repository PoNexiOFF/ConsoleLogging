# LightCore ConsoleLogging

> A TypeScript library for console logging with colors, timestamps, and custom styles.

---

## Overview

`ConsoleLogging` is a small console logging library that allows you to:

- Print messages in **color** in the terminal
- Include **timestamps**
- Use **predefined styles** (`DEBUG`, `INFO`, `WARNING`, `ERROR`, `SUCCESS`)
- Add **custom codes** for your logs
- Easily extend with new colors and styles

It is fully typed in TypeScript for safe usage in projects of any size.

---

## Project Structure

```bash
ConsoleLogging/
├─ classes/
│  └─ LogEntry.ts          # Main logging class
├─ data/
│  └─ colors.json           # ANSI color codes
├─ functions/
│  ├─ formatTime.ts         # Timestamp formatting function
│  └─ getColors.ts          # Color resolver function
├─ typedefs/
│  ├─ LogColor.ts           # Color constants and types
│  └─ LogStyle.ts           # Style constants and types
├─ index.ts                 # Export all main components
├─ tsconfig.json            # TypeScript config
├─ package-lock.json
├─ package.json
└─ README.md
```

---

## Installation

Install via npm:

```bash
npm install lcore-cl
```

Or clone it via github:

```bash
git clone https://github.com/PoNexiOFF/ConsoleLogging.git
cd ConsoleLogging
npm install
npm run build
```