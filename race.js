const race = (promises) =>
  new Promise((resolve, reject) => {
    promises.forEach((p) => Promise.resolve(p).then(resolve).catch(reject));
  });

const some = (promises, count) =>
  new Promise((resolve) => {
    if (!promises.length || count === 0) return resolve([]);
    const results = [];
    let settled = 0;
    promises.forEach((p, i) => {
      Promise.resolve(p).then((val) => {
        results.push({ i, val });
        settled++;
        if (settled === count) {
          resolve(results.sort((a, b) => a.i - b.i).map((r) => r.val));
        }
      });
    });
  });
