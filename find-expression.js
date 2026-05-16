const findExpression = (target) => {
  const addVal = Number(add4);
  const mulVal = Number(mul2.slice(1));

  const search = (current, path) => {
    if (current === target) return path;
    if (current > target) return undefined;
    return (
      search(current + addVal, path + " " + add4) ??
      search(current * mulVal, path + " " + mul2)
    );
  };
  return search(1, "1");
};
