const reverse = (input) => {
  let result = typeof input === "string" ? "" : [];
  for (let i = input.length - 1; i >= 0; i--) {
    if (typeof input === "string") result += input[i];
    else result.push(input[i]);
  }
  return result;
};
