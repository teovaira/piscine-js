const trunc = (n) => {
  if (n >= 0) {
    let i = 0;
    while (i + 1 <= n) i++;
    return i;
  }
  let i = 0;
  while (i - 1 >= n) i--;
  return i;
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
