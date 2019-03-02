import { radios } from './data-old';
import { prepareData } from './migrate';
import { IRadioWithNewID } from './types';

export type IRadio = IRadioWithNewID;

const data: IRadio[] = prepareData(radios);
export default data;
