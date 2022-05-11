import { StoredDatum } from './StoredDatum';
import { daysToMs, now } from './time';

export const hasExpired = (datum: StoredDatum<any>, currentTime = now()) =>
	datum.expiresAt <= currentTime;

export const expireInDays = (days: number) => now() + daysToMs(days);
