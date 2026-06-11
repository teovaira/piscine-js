const arrToSet = (arr) => new Set(arr);
const arrToStr = (arr) => arr.join('');
const setToArr = (set) => [...set];
const setToStr = (set) => [...set].join('');
const strToArr = (str) => [...str];
const strToSet = (str) => new Set(str);
const mapToObj = (map) => Object.fromEntries(map);
const objToArr = (obj) => Object.values(obj);
const objToMap = (obj) => new Map(Object.entries(obj));
const arrToObj = (arr) => Object.fromEntries(arr.map((v, i) => [i, v]));
const strToObj = (str) => Object.fromEntries([...str].map((v, i) => [i, v]));

const superTypeOf = (v) => {
  if (v === null) return 'null';
  if (v === undefined) return 'undefined';
  return v.constructor.name;
};
