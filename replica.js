const replica = (target, ...sources) => {
  for (const source of sources) {
    for (const key in source) {
      if (!source.hasOwnProperty(key)) continue;
      if (
        source[key] !== null &&
        typeof source[key] === "object" &&
        !Array.isArray(source[key]) &&
        !(source[key] instanceof RegExp)
      ) {
        if (
          !target[key] ||
          typeof target[key] !== "object" ||
          Array.isArray(target[key])
        ) {
          target[key] = {};
        }
        replica(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
};
