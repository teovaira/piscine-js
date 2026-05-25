const pick = (obj, keys) => {
  const keyArr = Array.isArray(keys) ? keys : [keys];
  const result = {};
  for (const key of keyArr) {
    if (obj.hasOwnProperty(key)) result[key] = obj[key];
  }
  return result;
};

const omit = (obj, keys) => {
  const keyArr = Array.isArray(keys) ? keys : [keys];
  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !keyArr.includes(key))
      result[key] = obj[key];
  }
  return result;
};
