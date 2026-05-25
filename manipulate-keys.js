const filterKeys = (obj, fn) =>
  Object.fromEntries(Object.entries(obj).filter(([k, v]) => fn(k, v, obj)));

const mapKeys = (obj, fn) =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [fn(k, v, obj), v]));

const reduceKeys = (obj, fn, init) => {
  const keys = Object.keys(obj);
  if (init === undefined) {
    return keys.slice(1).reduce((acc, k) => fn(acc, k, obj), keys[0]);
  }
  return keys.reduce((acc, k) => fn(acc, k, obj), init);
};
