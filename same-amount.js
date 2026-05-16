const sameAmount = (str, reg1, reg2) => {
  const count = (str, reg) => (str.match(reg) || []).length;
  return count(str, reg1) === count(str, reg2);
};
