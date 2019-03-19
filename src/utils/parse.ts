/** Parse the numeric string with base 10 and return it. Return 0 if NaN. */
export const parse = (numericString: string): number => {
  const parsed = parseInt(numericString, 10);
  if (isNaN(parsed)) return 0;

  return parsed;
};
