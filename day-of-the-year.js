const dayOfTheYear = (date) => {
  const start = new Date(0);
  start.setFullYear(date.getFullYear(), 0, 1);
  start.setHours(0, 0, 0, 0);
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.round((date - start) / msPerDay) + 1;
};
