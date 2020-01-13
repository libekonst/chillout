import { data } from './radio.data';
import { prepareData } from './radio.adapter';
import { RadioProvider } from './radio.types';

export function getRadios() {
	return prepareData(data);
}

export const fetchRadios: RadioProvider = () => Promise.resolve(prepareData(data));
