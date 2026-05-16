const ionOut = (str) => {
  const matches = str.match(/\b\w*tion\w*\b/g) || [];
  return matches.map((w) => w.replace(/ion/, ""));
};
