// TODO: Refactor.
export const chop = <T>(arr: T[], size: number): T[][] => {
  if (arr.length < size) return [[...arr]];

  const chopHolder: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chopHolder.push(arr.slice(i, i + size)); // .slice extracts up to but not including the end statement.
  }
  return chopHolder;
};
