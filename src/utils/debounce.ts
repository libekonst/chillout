/**
 * Deploy some closure magic to call a function only after a certain timespan has elapsed without calling it again.
 *
 * This high order function takes a `callback` as an argument and returns a function that can be safely called repeatedly.
 * The debounced function wil not invoke the `callback` until it stops being called for `delay` ms.
 *
 * When invoked, the debounced function immediately cancels the timeout established by the preceding call, preventing the
 * `callback` from reaching the Callback Queue. The timeoutID variable holds the id of the timeout established by setTimeout.
 * Closure allows the returned inner function to have access to timeoutID, which is utilized to clear the previous timeout and
 * reassign the variable to the latest timeout id.
 *
 * Useful for suspending subsequent setState calls caused by user events and only execute the latest call.
 */
const debounce = (callback: () => any, delay = 250): (() => void) => {
  let timeoutID: number;

  return () => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(callback, delay);
  };
};

export default debounce;
