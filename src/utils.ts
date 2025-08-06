import { Seconds } from './time-units';

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
export const delay = (ms: number, callback: () => any, ) => setTimeout(callback, ms)

export const countdown = (seconds: number, onTick: (remaining: number) => void, onComplete: () => void) => {
	let remaining = seconds
	const interval = setInterval(() => {
		remaining--
		onTick?.(remaining)
		if (remaining <= 0) {
			clearInterval(interval)
			onComplete?.()
		}
	}, Seconds(1))
	return () => clearInterval(interval)
}
