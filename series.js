const series = async (arr) => {
  const results = [];
  for (const fn of arr) {
    results.push(await fn());
  }
  return results;
};
