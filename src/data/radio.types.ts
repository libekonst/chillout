export interface RadioModel {
	id: string;
	website?: string;
	name: string;
	source: string;
	image: string;
}

export interface Radio {
	label: string;
	id: number;
	website?: string;
	name: string;
	source: string;
	image: string;
}

export interface RadioData {
	[label: string]: RadioModel[];
}

export type RadioProvider = () => Promise<Radio[]>;
