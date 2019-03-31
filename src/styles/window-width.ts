import theme from './theme';

/** Returns whether the window innerwidth is larger than 1280px */
export const isLarge = (): boolean => window.innerWidth >= theme.breakpoints.lg;
