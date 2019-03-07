// TODO: Refactor.
export const chop = <T>(arr: T[], size: number): T[][] => {
  const chunk = [];
  let slice = [];
  for (let i = 0; i < arr.length; i++) {
    if (slice.length < size) {
      slice.push(arr[i]);
      if (i === arr.length - 1) {
        chunk.push(slice);
      }
    } else {
      chunk.push(slice);
      slice = [];
      slice.push(arr[i]);
    }
  }
  return chunk;
};
