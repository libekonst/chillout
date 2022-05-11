import { Radio } from 'data/radio/Radio';
import { getMockData } from './getMockData';
import { mapResponseToRadio } from './mapResponseToRadio';

export const fetchRadios = async (): Promise<Radio[]> => {
	await wait();
	const res = getMockData();
	return mapResponseToRadio(res);
};

const wait = () => new Promise(resolve => setTimeout(resolve, 2000));
