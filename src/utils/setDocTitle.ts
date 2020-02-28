/** Changes the document.title property or resets it if no text is provided, and returns the new title. */
const setDocTitle = (text?: string) => {
	const base = 'The Chillout App';
	const title = text ? `${text} - ${base}` : base;

	document.title = title;
};
export default setDocTitle;
