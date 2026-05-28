const throttle = (fn, wait) => {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      fn(...args);
    }
  };
};

const opThrottle = (fn, wait, options = {}) => {
  let last = 0;
  let timer;
  const hasLeading = "leading" in options;
  const hasTrailing = "trailing" in options;
  const leading = hasLeading ? options.leading : !hasTrailing;
  const trailing = options.trailing !== false;

  return (...args) => {
    const now = Date.now();
    if (!leading && last === 0) last = now;

    const remaining = wait - (now - last);

    if (remaining <= 0) {
      clearTimeout(timer);
      timer = null;
      last = now;
      if (leading || last !== 0) fn(...args);
    } else if (trailing) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = leading ? Date.now() : 0;
        timer = null;
        fn(...args);
      }, remaining);
    }
  };
};
