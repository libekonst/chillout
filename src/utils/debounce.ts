/** 
 * Deploy some closure magic to call a function only after a certain timespan has elapsed without calling it again.
 * Useful to suspend subsequent setState calls caused by user events and only execute the latest call. 
 */
const debounce = (fn: () => any, delay = 250): (() => void) => {
  let timeoutID: number;

  return (): void => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(fn, delay);
  };
};

export default debounce;