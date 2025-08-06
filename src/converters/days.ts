import { DAYS_PER_WEEK, HOURS_PER_DAY, MINUTES_PER_DAY, MS_PER_DAY, SECONDS_PER_DAY } from '../constants'

const fromUnitConverters = {
	fromMilliseconds: (ms: number): number => ms / MS_PER_DAY,
	fromSeconds: (s: number): number => s / SECONDS_PER_DAY,
	fromMinutes: (m: number): number => m / MINUTES_PER_DAY,
	fromHours: (h: number): number => h / HOURS_PER_DAY,
	fromWeeks: (w: number): number => w * DAYS_PER_WEEK,
}

type DaysFunction = {
	(
		d: number,
	): {
		toMilliseconds: () => number
		toSeconds: () => number
		toMinutes: () => number
		toHours: () => number
		toWeeks: () => number
	}
} & typeof fromUnitConverters

const daysBase = (initialDays: number) => {
	return {
		toMilliseconds: () => initialDays * MS_PER_DAY,
		toSeconds: () => initialDays * SECONDS_PER_DAY,
		toMinutes: () => initialDays * MINUTES_PER_DAY,
		toHours: () => initialDays * HOURS_PER_DAY,
		toWeeks: () => initialDays / DAYS_PER_WEEK,
	}
}

export const days: DaysFunction = Object.assign(daysBase, fromUnitConverters)
