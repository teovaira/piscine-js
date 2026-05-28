const interpolation = ({ step, start, end, callback, duration }) => {
  const range = end - start;
  const interval = duration / step;

  for (let i = 0; i < step; i++) {
    const distance = start + (range * i) / step;
    const time = interval * (i + 1);
    setTimeout(() => callback([distance, time]), time);
  }
};
