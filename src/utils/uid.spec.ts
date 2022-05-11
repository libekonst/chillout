import { uid } from './uid';

test('uid generates unique IDs', () => {
	const firstId = uid();
	const secondId = uid();

	expect(firstId).not.toBe(secondId);
});
