import { MS_PER_DAY, MS_PER_HOUR, MS_PER_MINUTE, MS_PER_SECOND, MS_PER_WEEK } from './constants';

/**
 * Utility function to convert seconds to milliseconds
 * @param s Number of seconds
 * @returns Seconds in milliseconds
 */
export function Seconds (s: number): number {
	return s * MS_PER_SECOND;
}

/**
 * Utility function to convert minutes to milliseconds
 * @param m Number of minutes
 * @returns Minutes in milliseconds
 */
export function Minutes (m: number): number {
	return m * MS_PER_MINUTE;
}

/**
 * Utility function to convert hours to milliseconds
 * @param h Number of hours
 * @returns Hours in milliseconds
 */
export function Hours (h: number): number {
	return h * MS_PER_HOUR;
}

/**
 * Utility function to convert days to milliseconds
 * @param d Number of days
 * @returns Days in milliseconds
 */
export function Days (d: number): number {
	return d * MS_PER_DAY;
}

/**
 * Utility function to convert weeks to milliseconds
 * @param w Number of weeks
 * @returns Weeks in milliseconds
 */
export function Weeks (w: number): number {
	return w * MS_PER_WEEK;
}

timeUnits.Seconds = (s: number) => Seconds(s);
timeUnits.Minutes = (m: number) => Minutes(m);
timeUnits.Hours = (h: number) => Hours(h);
timeUnits.Days = (d: number) => Days(d);
timeUnits.Weeks = (w: number) => Weeks(w);

export default function timeUnits(){};
