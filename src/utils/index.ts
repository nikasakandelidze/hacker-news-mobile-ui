export const numberRange = (start: number, end: number) => {
  return new Array(end - start).fill().map((d, i) => i + start);
};
