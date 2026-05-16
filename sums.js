const sums = (n) => {
  if (n === 0) return [];
  const result = [];

  const search = (remaining, min, current) => {
    if (remaining === 0) {
      if (current.length >= 2) result.push([...current]);
      return;
    }
    for (let i = min; i <= remaining; i++) {
      current.push(i);
      search(remaining - i, i, current);
      current.pop();
    }
  };

  search(n, 1, []);
  return result;
};
