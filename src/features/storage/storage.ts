export type StorageGet = (key: string) => string | undefined;
export const getFromLocalStorage: StorageGet = (key) => localStorage.getItem(key) ?? undefined;

export type StorageSet = (key: string, value: string) => void;
/** Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set.*/
export const saveToLocalStorage: StorageSet = (key, value) => localStorage.setItem(key, value);
