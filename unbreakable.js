const split = (str, separator) => {
  const result = [];
  let current = "";
  for (let i = 0; i < str.length; i++) {
    if (separator === "") {
      result.push(str[i]);
    } else if (str.slice(i, i + separator.length) === separator) {
      result.push(current);
      current = "";
      i += separator.length - 1;
    } else {
      current += str[i];
    }
  }
  if (separator !== "") result.push(current);
  return result;
};

const join = (arr, separator = ",") => {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i < arr.length - 1) result += separator;
  }
  return result;
};
