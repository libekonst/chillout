import { Observable } from 'rxjs';
import { Radio } from '../radio/Radio';

export type RadioData = Record<Label, RadioDto[]>;
export type RadioProvider = () => Observable<Radio[]>;
export type Label = string;

export type RadioDto = {
	id: string;
	website?: string;
	name: string;
	source: string;
	image: string;
};
