const filterEntries = (obj, fn) =>
  Object.fromEntries(Object.entries(obj).filter(fn));

const mapEntries = (obj, fn) => Object.fromEntries(Object.entries(obj).map(fn));

const reduceEntries = (obj, fn, init) => {
  const entries = Object.entries(obj);
  if (init === undefined) {
    return entries.slice(1).reduce(fn, entries[0]);
  }
  return entries.reduce(fn, init);
};

const totalCalories = (cart) =>
  reduceEntries(
    cart,
    (acc, [name, grams]) => {
      return acc + (nutritionDB[name].calories * grams) / 100;
    },
    0,
  );

const lowCarbs = (cart) =>
  filterEntries(
    cart,
    ([name, grams]) => (nutritionDB[name].carbs * grams) / 100 < 50,
  );

const cartTotal = (cart) =>
  mapEntries(cart, ([name, grams]) => {
    const facts = nutritionDB[name];
    const scaled = {};
    for (const key in facts) {
      scaled[key] = Math.round(((facts[key] * grams) / 100) * 10) / 10;
    }
    return [name, scaled];
  });
