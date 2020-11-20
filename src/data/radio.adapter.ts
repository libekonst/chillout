import { RadioData, RadioDto, Radio } from './radio.types';

/** Transforms data from the radio provider to domain Radio */
export const prepareData = (data: RadioData): Radio[] => {
	const labelled = Object.entries(data).flatMap(addLabel);
	const withUpdatedId = labelled.map(addIndexAsId);

	return withUpdatedId as Radio[];
};

// Adds a label property to each radio DTO in the radios array and returns an array with updated radio POJOs.
const addLabel = ([label, radios]: [string, RadioDto[]]) =>
	radios.map(radio => ({ ...radio, label }));

const addIndexAsId = <T extends {}>(obj: T, i: number) => ({ ...obj, id: i });
