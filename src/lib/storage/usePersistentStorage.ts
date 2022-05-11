import { get, set } from './persistent';
import { Validator } from '../Validator';

export const usePersistentStorage = <T>(key: string, validator: Validator<T>) => {
	const storedValue = get(key, validator);

	const setStoredValue = (value: T) => set(key, value);

	return [storedValue, setStoredValue];
};
