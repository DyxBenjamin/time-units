/**
 * Utility functions for common operations
 */

/**
 * Checks if a value is not null or undefined
 * @param value - The value to check
 * @returns True if the value is not null or undefined
 */
export function isNotNullish<T>(value: T | null | undefined): value is T {
	return value !== null && value !== undefined;
}

/**
 * Safely gets a property from an object
 * @param obj - The object to get the property from
 * @param key - The key of the property
 * @returns The property value or undefined if not found
 */
export function safeGet<T, K extends keyof T>(obj: T, key: K): T[K] | undefined {
	return obj?.[key];
}

/**
 * Type guard to check if a value is a string
 * @param value - The value to check
 * @returns True if the value is a string
 */
export function isString(value: unknown): value is string {
	return typeof value === 'string';
}

/**
 * Type guard to check if a value is a number
 * @param value - The value to check
 * @returns True if the value is a number
 */
export function isNumber(value: unknown): value is number {
	return typeof value === 'number' && !isNaN(value);
}
