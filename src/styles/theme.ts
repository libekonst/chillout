const theme = {
  colors: {
    white: '#fafafa',
    palewhite: '#E3DBDD',

    // lightblack: 'rgb(45, 45, 45)',
    lightblack: 'rgb(80, 82, 83)',
    lightgray: '#afafaf',


    blue: '#052fb8',
    // blue: '#0099FF',
    lightblue: '#3498db',


    // purple: 'rgb(255, 32, 117)',
    // purple: '#d57eeb',
    // purple: '#f68084',
    amethyst: '#9b59b6',
    purple: '#e74c3c',
    // purple: '#fccb90',
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

  sizes: {
    iconButton: {
      tiny: '1.3rem',
      small: '1.7rem',
      medium: '2rem',
      big: '3.2rem',
      xbig: '4rem',
    },
  },
};

export default theme;
