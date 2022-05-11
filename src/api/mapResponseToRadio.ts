// import { Label, Radio } from '../data/radio/Radio';
import { Label } from 'data/radio/Radio';
import { RadioApiResponse } from './getMockData';

export const mapResponseToRadio = (data: RadioApiResponse) =>
	Object.entries(data).flatMap(([label, radios]) =>
		radios.map(
			radio => <const>{ ...radio, label: label === 'news' ? Label.NEWS : Label.MUSIC }
		)
	);
