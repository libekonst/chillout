export type Timestamp = number;

export const DAYS_IN_A_MONTH = 30;

const MS_IN_A_DAY = 86400000;
export const daysToMs = (days: number) => MS_IN_A_DAY * days;
export const now = () => new Date().getTime();
export const monthFromNow = () => now() + daysToMs(30);
