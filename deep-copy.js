const deepCopy = (val) => {
  if (Array.isArray(val)) return val.map(deepCopy);
  if (val !== null && typeof val === "object") {
    const result = {};
    for (const key in val) {
      if (val.hasOwnProperty(key)) result[key] = deepCopy(val[key]);
    }
    return result;
  }
  return val;
};
