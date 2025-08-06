import { MS_PER_SECOND, SECONDS_PER_DAY, SECONDS_PER_HOUR, SECONDS_PER_MINUTE, SECONDS_PER_WEEK } from '../constants';


const fromUnitConverters = {
	fromMilliseconds: (ms: number): number => ms / MS_PER_SECOND,
	fromMinutes: (m: number): number => m * SECONDS_PER_MINUTE,
	fromHours: (h: number): number => h * SECONDS_PER_HOUR,
	fromDays: (d: number): number => d * SECONDS_PER_DAY,
	fromWeeks: (w: number): number => w * SECONDS_PER_WEEK,
};

type SecondsFunction = {
(s: number): {
	toMilliseconds: () => number;
	toMinutes: () => number;
	toHours: () => number;
	toDays: () => number;
	toWeeks: () => number;
};
} & typeof fromUnitConverters;

const secondsBase = (initialSeconds: number) => {
	return {
		toMilliseconds: () => initialSeconds * MS_PER_SECOND,
		toMinutes: () => initialSeconds / SECONDS_PER_MINUTE,
		toHours: () => initialSeconds / SECONDS_PER_HOUR,
		toDays: () => initialSeconds / SECONDS_PER_DAY,
		toWeeks: () => initialSeconds / SECONDS_PER_WEEK,
	};
};

export const seconds: SecondsFunction = Object.assign(secondsBase, fromUnitConverters);
