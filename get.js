const get = (src, path) => {
  const keys = path.split(".");
  let current = src;
  for (const key of keys) {
    if (current === undefined || current === null) return undefined;
    current = current[key];
  }
  return current;
};
