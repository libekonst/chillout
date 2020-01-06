import { data } from './radio.data';
import { prepareData } from './radio.adapter';

export function fetchRadios() {
	// return Promise.resolve(prepareData(data));
	return prepareData(data);
}
