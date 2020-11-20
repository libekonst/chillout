import { Observable } from "rxjs";

export interface RadioDto {
	id: string;
	website?: string;
	name: string;
	source: string;
	image: string;
}

export interface Radio {
	id: number;
	website?: string;
	name: string;
	source: string;
	image: string;
	label: 'music' | 'news';
}

export interface RadioData {
	[label: string]: RadioDto[];
}

export type RadioProvider = () => Observable<Radio[]>;
