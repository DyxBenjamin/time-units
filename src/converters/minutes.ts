import { MINUTES_PER_DAY, MINUTES_PER_HOUR, MINUTES_PER_WEEK, MS_PER_MINUTE, SECONDS_PER_MINUTE } from '../constants';


const fromUnitConverters = {
	fromMilliseconds: (ms: number): number => ms / MS_PER_MINUTE,
	fromSeconds: (s: number): number => s / SECONDS_PER_MINUTE,
	fromHours: (h: number): number => h * MINUTES_PER_HOUR,
	fromDays: (d: number): number => d * MINUTES_PER_DAY,
	fromWeeks: (w: number): number => w * MINUTES_PER_WEEK,
};

type MinutesFunction = {
	(m: number): {
		toMilliseconds: () => number;
		toSeconds: () => number;
		toHours: () => number;
		toDays: () => number;
		toWeeks: () => number;
	};
} & typeof fromUnitConverters;

const minutesBase = (initialMinutes: number) => {
	return {
		toMilliseconds: () => initialMinutes * MS_PER_MINUTE,
		toSeconds: () => initialMinutes * SECONDS_PER_MINUTE,
		toHours: () => initialMinutes / MINUTES_PER_HOUR,
		toDays: () => initialMinutes / MINUTES_PER_DAY,
		toWeeks: () => initialMinutes / MINUTES_PER_WEEK,
	};
};

export const minutes: MinutesFunction = Object.assign(minutesBase, fromUnitConverters);
