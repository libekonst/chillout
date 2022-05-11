import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { data } from './mock-data';
import { prepareRadioData } from './prepareRadioData';

// export const fetchRadios: RadioProvider = () => Promise.resolve(prepareData(data));
// export const fetchRadios = () => timer(2000).pipe(mapTo(prepareData(data)), take(1));
export const fetchRadios = () => of(prepareRadioData(data)).pipe(delay(1));
