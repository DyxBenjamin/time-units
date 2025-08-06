import { MS_PER_DAY, MS_PER_HOUR, MS_PER_MINUTE, MS_PER_SECOND, MS_PER_WEEK } from '../constants';

const fromUnitConverters = {
	fromSeconds: (s: number) => s * MS_PER_SECOND,
	fromMinutes: (m: number) => m * MS_PER_MINUTE,
	fromHours: (h: number) => h * MS_PER_HOUR,
	fromDays: (d: number) => d * MS_PER_DAY,
	fromWeeks: (w: number) => w * MS_PER_WEEK,
}

type MsFunction = {
	(ms: number): {
		toSeconds: () => number;
		toMinutes: () => number;
		toHours: () => number;
		toDays: () => number;
		toWeeks: () => number;
	};
} & typeof fromUnitConverters;

const msBase = (initialMs: number) => {
	return {
		toSeconds: () => initialMs / MS_PER_SECOND,
		toMinutes: () => initialMs / MS_PER_MINUTE,
		toHours: () => initialMs / MS_PER_HOUR,
		toDays: () => initialMs / MS_PER_DAY,
		toWeeks: () => initialMs / MS_PER_WEEK,
	};
};

export const ms: MsFunction = Object.assign(msBase, fromUnitConverters);
