import { pipe } from 'ramda';
import { uid } from '../../utils/uid';
import { Radio } from '../radio/Radio';
import { RadioData, RadioDto } from './radio-dto';

/** Transforms data from the radio provider to domain Radio */
export const prepareRadioData = (data: RadioData): Radio[] =>
	Object.entries(data).flatMap(addLabelAndId) as Radio[];

// Adds a label property to each radio DTO in the radios array and returns an array with updated radio POJOs.
const addLabel = ([label, radios]: [string, RadioDto[]]) =>
	radios.map(radio => ({ ...radio, label }));

const addId = <T extends {}>(obj: T) => ({ ...obj, id: uid() });

const addLabelAndId = pipe(addLabel, addId);
