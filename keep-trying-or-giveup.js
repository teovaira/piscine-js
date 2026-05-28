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
