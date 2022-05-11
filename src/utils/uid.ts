// export const uid = () => Math.random().toString(16).slice(2);
export const uid = () => {
	const head = Date.now().toString(36);
	const tail = Math.random().toString(36).slice(2);

	console.log(`${head}${tail}`);

	return `${head}${tail}`;
};
