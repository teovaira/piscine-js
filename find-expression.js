const findExpression = (target) => {
  const search = (current, path) => {
    if (current === target) return path;
    if (current > target) return undefined;
    return (
      search(current + 4, path + " +4") ?? search(current * 2, path + " *2")
    );
  };
  return search(1, "1");
};
