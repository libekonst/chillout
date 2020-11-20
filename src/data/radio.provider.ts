import { data } from './radio.data';
import { prepareData } from './radio.adapter';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

// export const fetchRadios: RadioProvider = () => Promise.resolve(prepareData(data));
// export const fetchRadios = () => timer(2000).pipe(mapTo(prepareData(data)), take(1));
export const fetchRadios = () => of(prepareData(data)).pipe(delay(2000));
