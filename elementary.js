const multiply = (a, b) => {
  let result = 0;
  const positive = b < 0 ? -b : b;
  for (let i = 0; i < positive; i++) {
    result += a;
  }
  return b < 0 ? -result : result;
};

const divide = (a, b) => {
  let count = 0;
  const posA = a < 0 ? -a : a;
  const posB = b < 0 ? -b : b;
  let remaining = posA;
  while (remaining >= posB) {
    remaining -= posB;
    count++;
  }
  return a < 0 !== b < 0 ? -count : count;
};

const modulo = (a, b) => a - divide(a, b) * b;
