import { useState, useEffect } from 'react';
import { Observable } from 'rxjs';

function useObservable<T>(observable$: Observable<T>): T | undefined;
function useObservable<T>(observable$: Observable<T>, init: T): T;
function useObservable<T>(observable$: Observable<T>, init?: T): T | undefined {
	const [value, updateValue] = useState<T | undefined>(init);

	useEffect(() => {
		const sub = observable$.subscribe(updateValue);
		return () => sub.unsubscribe();
	}, [observable$]);

	return value;
}

export default useObservable;
