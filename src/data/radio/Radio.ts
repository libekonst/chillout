export type Radio = {
	id: string;
	website?: string;
	name: string;
	source: string;
	image: string;
	label: Label;
};

export enum Label {
	MUSIC = 'music',
	NEWS = 'news'
}

export const getId = (r: Radio) => r.id;
export const getWebsite = (r: Radio) => r.website;
export const getName = (r: Radio) => r.name;
export const getSource = (r: Radio) => r.source;
export const getImage = (r: Radio) => r.image;
export const getLabel = (r: Radio) => r.label;
