import { Validator } from 'lib/Validator';
import { domainPrefix } from './internal/domainPrefix';
import { expireInDays, hasExpired } from './internal/expiration';
import { createStoredDatum, isStoredDatum, StoredDatum } from './internal/StoredDatum';
import { DAYS_IN_A_MONTH } from './internal/time';

type Getter = <T>(key: string, validator: Validator<T>) => StoredDatum<T> | undefined;
export const get: Getter = (key, validator) => {
	const prefixedKey = domainPrefix(key);
	const saved = localStorage.getItem(prefixedKey);
	if (!saved) return undefined;

	try {
		const parsed = JSON.parse(saved);
		if (!isStoredDatum(parsed, validator)) return undefined;
		if (hasExpired(parsed)) {
			// TODO dodgy
			remove(prefixedKey);
			return undefined;
		}

		return parsed;
	} catch (error) {
		console.log(error);
		return undefined;
	}
};

type Setter = <T>(
	key: string,
	value: T,
	options?: {
		lastsDays?: number;
	}
) => void;

export const set: Setter = (key, value, options = {}) => {
	const prefixedKey = domainPrefix(key);

	const { lastsDays = DAYS_IN_A_MONTH } = options;
	const datum = createStoredDatum(value, expireInDays(lastsDays));
	const serialized = JSON.stringify(datum);

	localStorage.setItem(prefixedKey, serialized);
};

export const remove = (key: string) => localStorage.removeItem(domainPrefix(key));
