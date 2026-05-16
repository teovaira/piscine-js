const getURL = (str) => str.match(/https?:\/\/\S+/g) || [];

const greedyQuery = (str) =>
  getURL(str).filter((url) => {
    const params = url.match(/[?&][^&]*/g) || [];
    return params.length >= 3;
  });

const notSoGreedy = (str) =>
  getURL(str).filter((url) => {
    const params = url.match(/[?&][^&]*/g) || [];
    return params.length >= 2 && params.length <= 3;
  });
