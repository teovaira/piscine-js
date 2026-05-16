const flat = (arr, depth = 1) => {
  if (depth === 0) return arr;
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      const flattened = flat(item, depth - 1);
      for (const el of flattened) result.push(el);
    } else {
      result.push(item);
    }
  }
  return result;
};
