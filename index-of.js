const indexOf = (arr, value, start = 0) => {
  for (let i = start; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
};

const lastIndexOf = (arr, value) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === value) return i;
  }
  return -1;
};

const includes = (arr, value) => indexOf(arr, value) !== -1;
