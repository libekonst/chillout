/** Deploy some closure magic to call a function only after a certain timespan has elapsed without calling it again. */
const debounce = (fn: () => any, delay = 250): (() => void) => {
  let timeoutID: number;

  return (): void => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(fn, delay);
  };
};

export default debounce;