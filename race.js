const race = (promises) =>
  new Promise((resolve, reject) => {
    promises.forEach((p) => Promise.resolve(p).then(resolve).catch(reject));
  });

const some = (promises, count) =>
  new Promise((resolve) => {
    if (!promises.length || count === 0) return resolve([]);
    const results = [];
    promises.forEach((p) => {
      Promise.resolve(p).then((val) => {
        results.push(val);
        if (results.length === count) resolve(results);
      });
    });
  });
