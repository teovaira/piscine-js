const indexOf = (arr, value, start = 0) => {
  for (let i = start; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
};

const lastIndexOf = (arr, value, start = arr.length - 1) => {
  for (let i = start; i >= 0; i--) {
    if (arr[i] === value) return i;
  }
  return -1;
};

const includes = (arr, value) => indexOf(arr, value) !== -1;
