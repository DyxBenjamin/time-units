# @dyxbenjamin/time-units

[![npm version](https://badge.fury.io/js/%40dyxbenjamin%2Ftime-units.svg)](https://badge.fury.io/js/%40dyxbenjamin%2Ftime-units)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight and intuitive TypeScript library for converting time units and performing common time-based operations.

## Features

- **Fluent Conversion API:** Chainable methods for clear and readable time conversions (e.g., `days(2).toHours()`).
- **Millisecond Converters:** Simple functions to quickly convert standard time units directly to milliseconds.
- **Time Utilities:** Includes helper functions like `sleep`, `delay`, and a `countdown` timer.
- **Fully Typed:** Written in TypeScript for excellent editor support and type safety.
- **Zero Dependencies:** A lightweight library with no external dependencies.

## Installation

```bash
npm install @dyxbenjamin/time-units
```

```bash
bun add @dyxbenjamin/time-units
```

## Usage

### Fluent Time Unit Conversions

The library provides a fluent API for converting from a specific unit to others.

```typescript
import { days, hours, minutes } from '@dyxbenjamin/time-units';

// Convert 2 days to other units
const twoDaysInHours = days(2).toHours(); // 48
const twoDaysInMinutes = days(2).toMinutes(); // 2880
const twoDaysInSeconds = days(2).toSeconds(); // 172800

// Convert from other units to days
const hoursInDays = days.fromHours(48); // 2
const weeksInDays = days.fromWeeks(1); // 7

// Chaining is supported for all units:
// ms, seconds, minutes, hours, days, weeks
const totalSeconds = hours(1).toSeconds(); // 3600
const totalMs = minutes(1.5).toMilliseconds(); // 90000
```

### Millisecond Conversion Functions

For quick conversions to milliseconds, you can use the capitalized utility functions. These are useful for APIs that require millisecond values, like `setTimeout`.

```typescript
import { Days, Hours, Minutes, Seconds } from '@dyxbenjamin/time-units';

const fiveMinutesInMs = Minutes(5); // 300000
const oneDayInMs = Days(1); // 86400000

setTimeout(() => {
  console.log('This runs after 10 seconds.');
}, Seconds(10));
```

### Time Utilities

#### sleep

Pauses execution for a specified duration.

```typescript
import { sleep, Seconds } from '@dyxbenjamin/time-units';

async function run() {
  console.log('Start');
  await sleep(Seconds(2));
  console.log('End, after 2 seconds');
}

run();
```

#### delay

Executes a callback after a specified duration.

```typescript
import { delay, Minutes } from '@dyxbenjamin/time-units';

console.log('Scheduling a task...');
delay(Minutes(1), () => {
  console.log('This task runs after 1 minute.');
});
```

#### countdown

Creates a countdown timer that ticks every second.

```typescript
import { countdown } from '@dyxbenjamin/time-units';

console.log('Countdown started!');

const stopCountdown = countdown(
  10, // Start from 10 seconds
  (remaining) => {
    console.log(`Tick: ${remaining}s left`);
  },
  () => {
    console.log('Countdown complete!');
  }
);

// To stop the countdown prematurely (e.g., after 3 seconds)
// setTimeout(stopCountdown, 3000);
```

## API Reference

### Conversion Functions

- `ms(value: number)`
- `seconds(value: number)`
- `minutes(value: number)`
- `hours(value: number)`
- `days(value: number)`
- `weeks(value: number)`

Each function returns an object with `to...` methods and has static `from...` methods attached.

### Millisecond Converters

- `Seconds(value: number): number`
- `Minutes(value: number): number`
- `Hours(value: number): number`
- `Days(value: number): number`
- `Weeks(value: number): number`

### Utility Functions

- `sleep(ms: number): Promise<void>`
- `delay(ms: number, callback: () => void): void`
- `countdown(seconds: number, onTick: (remaining: number) => void, onComplete: () => void): () => void`

## Development

```bash
# Install dependencies
bun install

# Build the library
bun run build

# Watch for changes during development
bun run dev

# Format code
bun run format

# Lint code
bun run lint
```

## Publishing

```bash
# Patch version
bun run publish:patch

# Minor version
bun run publish:minor

# Major version
bun run publish:major
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
