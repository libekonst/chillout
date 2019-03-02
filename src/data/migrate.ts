import { IOldJson, IRadioWithNewID, IRadioDto, IRadioWithLabel } from './types';

// Transforms old data json to a flat array of DTOs that also have a label and an auto incrementing ID.
export const prepareData = (data: IOldJson): IRadioWithNewID[] => {
  const entries = Object.entries(data);
  const labelled = entries.map(addLabel);
  const flat = labelled.reduce(flatten, []);
  const withNewId = flat.map((obj, i) => ({ ...obj, id: i }));

  return withNewId;
};

// Adds a label property to each radio DTO in the radios array and returns an array with updated radio POJOs.
const addLabel = ([label, radios]: [string, IRadioDto[]]): IRadioWithLabel[] =>
  radios.map(radio => ({ ...radio, label }));

const flatten = (sum: any[], next: any[]) => [...sum, ...next];
