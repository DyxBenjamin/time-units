import { HOURS_PER_DAY, HOURS_PER_WEEK, MINUTES_PER_HOUR, MS_PER_HOUR, SECONDS_PER_HOUR } from '../constants';

const fromUnitConverters = {
	fromMilliseconds: (ms: number): number => ms / MS_PER_HOUR,
	fromSeconds: (s: number): number => s / SECONDS_PER_HOUR,
	fromMinutes: (m: number): number => m / MINUTES_PER_HOUR,
	fromDays: (d: number): number => d * HOURS_PER_DAY,
	fromWeeks: (w: number): number => w * HOURS_PER_WEEK,
};

type HoursFunction = {
	(h: number): {
		toMilliseconds: () => number;
		toSeconds: () => number;
		toMinutes: () => number;
		toDays: () => number;
		toWeeks: () => number;
	};
} & typeof fromUnitConverters;

const hoursBase = (initialHours: number) => {
	return {
		toMilliseconds: () => initialHours * MS_PER_HOUR,
		toSeconds: () => initialHours * SECONDS_PER_HOUR,
		toMinutes: () => initialHours * MINUTES_PER_HOUR,
		toDays: () => initialHours / HOURS_PER_DAY,
		toWeeks: () => initialHours / HOURS_PER_WEEK,
	};
};

export const hours: HoursFunction = Object.assign(hoursBase, fromUnitConverters);
