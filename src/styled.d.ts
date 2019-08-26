import 'styled-components';

/**
 * Use declaration merging to extend the original styled components module with a theme interface.
 *
 * https://www.typescriptlang.org/docs/handbook/declaration-merging.html
 *
 * https://www.styled-components.com/docs/api#typescript
 */
declare module 'styled-components' {
  export interface IDefaultTheme {
    colors: {
      lightgray: string;
      lightblack: string;
      blue: string;
      lightblue: string;
      purple: string;
      lightPurple: string;
      cyan: string;
      [colorName: string]: string;
    };
    /**
     * Various breakpoints, size in pixels.
     * Media queries are inclusive: `@media (max-width: 600px){}` => up to and including 600px.
     */
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };

    iconButton: {
      tiny: string;
      small: string;
      medium: string;
      big: string;
      xbig: string;
    };
  }
}
