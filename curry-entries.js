const defaultCurry = (obj1) => (obj2) => ({ ...obj1, ...obj2 });

const mapCurry = (fn) => (obj) =>
  Object.fromEntries(Object.entries(obj).map(fn));

const reduceCurry = (fn) => (obj, init) => Object.entries(obj).reduce(fn, init);

const filterCurry = (fn) => (obj) =>
  Object.fromEntries(Object.entries(obj).filter(fn));

const reduceScore = (personnel, init = 0) =>
  reduceCurry((acc, [k, v]) =>
    v.isForceUser ? acc + v.pilotingScore + v.shootingScore : acc,
  )(personnel, init);

const filterForce = (personnel) =>
  filterCurry(([k, v]) => v.isForceUser && v.shootingScore >= 80)(personnel);

const mapAverage = (personnel) =>
  mapCurry(([k, v]) => [
    k,
    { ...v, averageScore: (v.pilotingScore + v.shootingScore) / 2 },
  ])(personnel);
