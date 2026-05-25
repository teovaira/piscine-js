const filterValues = (obj, fn) =>
  Object.fromEntries(Object.entries(obj).filter(([k, v]) => fn(v, k, obj)));

const mapValues = (obj, fn) =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, fn(v, k, obj)]));

const reduceValues = (obj, fn, init) => {
  const entries = Object.entries(obj);
  if (init === undefined) {
    return entries
      .slice(1)
      .reduce((acc, [k, v]) => fn(acc, v, k, obj), entries[0][1]);
  }
  return entries.reduce((acc, [k, v]) => fn(acc, v, k, obj), init);
};
