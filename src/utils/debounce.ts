/** Demploy some closure magic to call a function only after a certain timespan has passed without calling it again. */
export const debounce = (func: () => any, delay = 250): (() => void) => {
  let timeoutID: number;

  return () => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(func, delay);
  };
};
