const retry =
  (count, callback) =>
  async (...args) => {
    let attempts = 0;
    while (true) {
      try {
        return await callback(...args);
      } catch (err) {
        attempts++;
        if (attempts > count)
          throw new Error(err.message || "max retries reached");
      }
    }
  };

const timeout =
  (delay, callback) =>
  async (...args) => {
    let timerId;
    const timer = new Promise((_, reject) => {
      timerId = setTimeout(() => reject(new Error("timeout")), delay);
    });
    try {
      const result = await Promise.race([callback(...args), timer]);
      clearTimeout(timerId);
      return result;
    } catch (err) {
      clearTimeout(timerId);
      throw err;
    }
  };
