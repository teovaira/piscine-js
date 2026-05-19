const map = (arr, fn) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i, arr));
  }
  return result;
};

const flatMap = (arr, fn) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const val = fn(arr[i], i, arr);
    if (Array.isArray(val)) {
      for (let j = 0; j < val.length; j++) result.push(val[j]);
    } else {
      result.push(val);
    }
  }
  return result;
};
