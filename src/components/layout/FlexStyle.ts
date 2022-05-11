export type FlexStyle = {
	direction: 'row' | 'column';
	alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
	justifyContent?:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-between'
		| 'space-around'
		| 'space-evenly';
};
