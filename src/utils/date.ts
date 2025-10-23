export const convertDateString = (date: string) => {
  return date.split("T")[0];
};

export const convertDateToString = (date: Date) => {
  return convertDateString(date.toISOString());
};
