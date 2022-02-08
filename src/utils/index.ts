export const datesRange = (start: string, end: string): Array<string> => {
  const startNumber = getNumberFromDate(start);
  const endNumber = getNumberFromDate(end);
  const monthYear = getTailsFromDate(start);
  return new Array(endNumber - startNumber + 1)
    .fill()
    .map((d, i) => i + "-" + monthYear);
};

// Input date format: DD-MM-YY
export const getNumberFromDate = (day: string): number => {
  return Number(day.split("-")[0]);
};

export const getTailsFromDate = (day: string): string => {
  return day.split("-").slice(1).join("-");
};
