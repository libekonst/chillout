import { IDefaultTheme } from 'styled-components';

const theme: IDefaultTheme = {
  colors: {
    // white: '#fafafa',
    // palewhite: '#E3DBDD',

    lightgray: '#afafaf',
    lightblack: 'rgb(80, 82, 83)',
    blue: '#052fb8',
    cyan: 'rgb(59, 140, 168)',
    lightblue: '#3498db',
    purple: 'rgb(255, 32, 62)',
    // lightPurple: 'rgb(255, 178, 188)',
    lightPurple: 'rgb(255, 211, 217)',
  },

  /**
   * Various breakpoints, size in pixels.
   * Media queries are inclusive: `@media (max-width: 600px){}` => up to and including 600px.
   */
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },

  iconButton: {
    tiny: '1.3rem',
    small: '1.7rem',
    medium: '2rem',
    big: '3.2rem',
    xbig: '4rem',
  },
};

export default theme;
