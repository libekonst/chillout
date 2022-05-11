import { Validator } from 'lib/Validator';
import { now, Timestamp } from './time';

export type StoredDatum<T> = {
	data: T;
	createdAt: Timestamp;
	expiresAt: Timestamp;
};

export const isStoredDatum = <T>(
	input: any,
	validator: Validator<T>
): input is StoredDatum<T> =>
	typeof input === 'object' &&
	typeof input?.createdAt === 'number' &&
	typeof input?.expiresAt === 'number' &&
	validator(input?.data);

type Factory = <T>(input: T, expiresAt: Timestamp) => StoredDatum<T>;
export const createStoredDatum: Factory = (data, expiresAt) => ({
	createdAt: now(),
	expiresAt,
	data
});
