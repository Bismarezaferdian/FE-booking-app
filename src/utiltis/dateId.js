export const dateId = (dat) => {
  const tangal = new Date(dat);
  const dateFormatter = new Intl.DateTimeFormat("id", {
    day: "numeric",
    month: "long",
    weekday: "long",
    year: "numeric",
  });
  return dateFormatter.format(tangal);
};
