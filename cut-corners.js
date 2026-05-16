const trunc = (n) => {
  if (n < 0) return -trunc(-n);
  if (n < 1) return 0;
  let step = 1;
  while (step * 2 <= n) step *= 2;
  let result = 0;
  while (step >= 1) {
    while (result + step <= n) result += step;
    step /= 2;
  }
  return result;
};

const floor = (n) => {
  const t = trunc(n);
  if (t === n) return n;
  return n < 0 ? t - 1 : t;
};

const ceil = (n) => {
  const t = trunc(n);
  if (t === n) return n;
  return n < 0 ? t : t + 1;
};

const round = (n) => {
  const f = floor(n);
  return n - f >= 0.5 ? f + 1 : f;
};
