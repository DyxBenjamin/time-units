import { DAYS_PER_WEEK, HOURS_PER_WEEK, MINUTES_PER_WEEK, MS_PER_WEEK, SECONDS_PER_WEEK } from '../constants'

const fromUnitConverters = {
	fromMilliseconds: (ms: number): number => ms / MS_PER_WEEK,
	fromSeconds: (s: number): number => s / SECONDS_PER_WEEK,
	fromMinutes: (m: number): number => m / MINUTES_PER_WEEK,
	fromHours: (h: number): number => h / HOURS_PER_WEEK,
	fromDays: (d: number): number => d / DAYS_PER_WEEK,
}

type WeeksFunction = {
	(
		w: number,
	): {
		toMilliseconds: () => number
		toSeconds: () => number
		toMinutes: () => number
		toHours: () => number
		toDays: () => number
	}
} & typeof fromUnitConverters

const weeksBase = (initialWeeks: number) => {
	return {
		toMilliseconds: () => initialWeeks * MS_PER_WEEK,
		toSeconds: () => initialWeeks * SECONDS_PER_WEEK,
		toMinutes: () => initialWeeks * MINUTES_PER_WEEK,
		toHours: () => initialWeeks * HOURS_PER_WEEK,
		toDays: () => initialWeeks * DAYS_PER_WEEK,
	}
}

export const weeks: WeeksFunction = Object.assign(weeksBase, fromUnitConverters)
