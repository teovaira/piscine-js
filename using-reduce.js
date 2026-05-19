const adder = (arr, init = 0) => arr.reduce((acc, val) => acc + val, init);

const sumOrMul = (arr, init = 1) =>
  arr.reduce((acc, val) => (val % 2 === 0 ? acc * val : acc + val), init);

const funcExec = (arr, init = undefined) =>
  arr.reduce((acc, fn) => fn(acc), init);
