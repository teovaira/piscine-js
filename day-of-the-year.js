const dayOfTheYear = (date) => {
  const start = new Date(date.getFullYear(), 0, 1);
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.round((date - start) / msPerDay);
};
