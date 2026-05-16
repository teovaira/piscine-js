const sameAmount = (str, reg1, reg2) => {
  const count = (str, reg) => {
    const g = new RegExp(
      reg.source,
      reg.flags.includes("g") ? reg.flags : reg.flags + "g",
    );
    return (str.match(g) || []).length;
  };
  return count(str, reg1) === count(str, reg2);
};
