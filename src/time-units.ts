export function Seconds (s: number): number {
	return s * 1000;
}

export function Minutes (m: number): number {
	return m * 60 * 1000;
}

export function Hours (h: number): number {
	return h * 60 * 60 * 1000;
}

export function Days (d: number): number {
	return d * 24 * 60 * 60 * 1000;
}

export function Weeks (w: number): number {
	return w * 7 * 24 * 60 * 60 * 1000;
}

timeUnits.Seconds = (s: number) => Seconds(s);
timeUnits.Minutes = (m: number) => Minutes(m);
timeUnits.Hours = (h: number) => Hours(h);
timeUnits.Days = (d: number) => Days(d);
timeUnits.Weeks = (w: number) => Weeks(w);

export default function timeUnits(){};
