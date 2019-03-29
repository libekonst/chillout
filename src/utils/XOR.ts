/**
 * Exclusive OR. Evaluates to true if one and only one input is true.
 */
export const XOR = (A: boolean, B: boolean): boolean => (A && !B) || (!A && B);
