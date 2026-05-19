const flow =
  (fns) =>
  (...args) =>
    fns.reduce((acc, fn, i) => (i === 0 ? fn(...acc) : fn(acc)), args);
