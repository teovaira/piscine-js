const debounce = (fn, wait) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
};

const opDebounce = (fn, wait, options = {}) => {
  let timer;
  let called = false;
  return (...args) => {
    if (options.leading && !called) {
      fn(...args);
      called = true;
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      called = false;
      if (!options.leading) fn(...args);
    }, wait);
  };
};
