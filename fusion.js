const fusion = (obj1, obj2) => {
  const result = { ...obj1 };
  for (const key in obj2) {
    if (!obj2.hasOwnProperty(key)) continue;
    if (!(key in result)) {
      result[key] = obj2[key];
    } else if (Array.isArray(result[key]) && Array.isArray(obj2[key])) {
      result[key] = [...result[key], ...obj2[key]];
    } else if (
      typeof result[key] === "string" &&
      typeof obj2[key] === "string"
    ) {
      result[key] = result[key] + " " + obj2[key];
    } else if (
      typeof result[key] === "number" &&
      typeof obj2[key] === "number"
    ) {
      result[key] = result[key] + obj2[key];
    } else if (
      typeof result[key] === "object" &&
      !Array.isArray(result[key]) &&
      typeof obj2[key] === "object" &&
      !Array.isArray(obj2[key]) &&
      result[key] !== null &&
      obj2[key] !== null
    ) {
      result[key] = fusion(result[key], obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }
  return result;
};
