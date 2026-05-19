const currify = (fn) => {
  const arity = fn.length;
  const curry = (...args) =>
    args.length >= arity ? fn(...args) : (...more) => curry(...args, ...more);
  return curry;
};
