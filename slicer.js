const slice = (input, start, end = input.length) => {
  const len = input.length;
  let s = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
  let e = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);

  const result = [];
  for (let i = s; i < e; i++) {
    result[result.length] = input[i];
  }

  return typeof input === "string" ? result.join("") : result;
};
