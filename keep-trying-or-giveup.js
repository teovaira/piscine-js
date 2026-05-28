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
    const timer = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), delay),
    );
    try {
      return await Promise.race([callback(...args), timer]);
    } catch (err) {
      return new Error(err.message || "timeout");
    }
  };
