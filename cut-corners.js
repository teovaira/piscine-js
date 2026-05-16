const trunc = (n) => {
  let i = 0;
  if (n >= 0) {
    while (i + 1 <= n) i++;
  } else {
    while (i - 1 >= n) i--;
  }
  return i;
};

const floor = (n) => (trunc(n) === n ? n : n < 0 ? trunc(n) - 1 : trunc(n));

const ceil = (n) => (trunc(n) === n ? n : n < 0 ? trunc(n) : trunc(n) + 1);

const round = (n) => (n - trunc(n) >= 0.5 ? ceil(n) : floor(n));
