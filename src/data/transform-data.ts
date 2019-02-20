import { IRadioTypes, IOldJson } from './types';

// Adds a label property to the radio DTO.
const addLabel = ([label, radios]: LabelRadiosPair): IRadioTypes.WithLabel[] =>
  radios.map(radio => ({ ...radio, label }));

type LabelRadiosPair = [string, IRadioTypes.Dto[]];

const flatten = (sum: any[], next: any[]) => [...sum, ...next];

// Transforms old data json to a flat array of DTOs that also have a label and an auto incrementing ID.
export const prepareData = (data: IOldJson): IRadioTypes.WithNewID[] => {
  const entries = Object.entries(data);
  const labelled = entries.map(addLabel);
  const flat = labelled.reduce(flatten, []);
  const withNewId = flat.map((obj, i) => ({ ...obj, id: i }));

  return withNewId;
};
