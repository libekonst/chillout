import { IRadio, IOldJson } from './types';

// Adds a label property to each radio DTO in the radios array and returns the array of updated POJOs.
const addLabel = ([label, radios]: [string, IRadio.Dto[]]): IRadio.WithLabel[] =>
  radios.map(radio => ({ ...radio, label }));

const flatten = (sum: any[], next: any[]) => [...sum, ...next];

// Transforms old data structure to a flat array of DTOs that also have a label and an auto incrementing ID.
export const prepareData = (data: IOldJson): IRadio.WithNewID[] => {
  const entries = Object.entries(data);
  const labelled = entries.map(addLabel);
  const flat = labelled.reduce(flatten, []);
  const withNewId = flat.map((obj, i) => ({ ...obj, id: i }));

  return withNewId;
};
