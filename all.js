const all = (obj) => {
  const keys = Object.keys(obj);
  const promises = keys.map((k) => obj[k]);
  let resolved = 0;
  const result = {};

  return new Promise((resolve, reject) => {
    if (keys.length === 0) return resolve({});
    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((val) => {
          result[keys[i]] = val;
          resolved++;
          if (resolved === keys.length) resolve(result);
        })
        .catch(reject);
    });
  });
};
