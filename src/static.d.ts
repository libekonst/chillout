// Declare modules to learn TypeScript know that these file types can be imported too thanks to Webpack.

declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.svg' {
  const value: any;
  export default value;
}
