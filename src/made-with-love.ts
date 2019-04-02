export const madeWithLove = () => {
  const textStyles = 'color: rgb(255, 32, 117); font-weight: bold; font-size: 2rem;';
  const reactColor = 'color: #61DAFB;';
  console.log(
    '%cMade with ❤️ and %cReact%c!',
    textStyles,
    textStyles + reactColor,
    textStyles,
  );
  console.log('%chttps://github.com/kostaslib', 'color: #052fb8;');
};
