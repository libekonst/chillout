/**
 * Various breakpoints, size in pixels.
 * Media queries are inclusive: `@media (max-width: 600px){}` => up to and including 600px.
 */
export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};
/** Returns whether the window innerwidth is larger than 1280px */
export const isLarge = (): boolean => window.innerWidth > breakpoints.lg;
