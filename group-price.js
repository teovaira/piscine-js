const groupPrice = (str) => {
  const matches = [...str.matchAll(/([A-Z]{3}|[\$€£])(\d+)\.(\d+)/g)];
  return matches.map((m) => [m[0], m[2], m[3]]);
};
