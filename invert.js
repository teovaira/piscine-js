const invert = (obj) => {
  const result = {};
  for (const key in obj) {
    result[obj[key]] = key;
  }
  return result;
};
