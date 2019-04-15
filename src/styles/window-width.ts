import theme from './theme';

/** Returns whether the window innerwidth is larger than or equal to 1280px */
export const isLarge = (): boolean => window.innerWidth >= 1280;
// export const isLarge = (): boolean => window.innerWidth >= theme.breakpoints.lg;
