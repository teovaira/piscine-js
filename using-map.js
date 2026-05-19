const citiesOnly = (arr) => arr.map((obj) => obj.city);

const upperCasingStates = (arr) =>
  arr.map((str) =>
    str
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" "),
  );

const fahrenheitToCelsius = (arr) =>
  arr.map((str) => {
    const f = parseInt(str);
    return Math.floor(((f - 32) * 5) / 9) + "°C";
  });

const trimTemp = (arr) =>
  arr.map((obj) => ({
    ...obj,
    temperature: obj.temperature.replace(/\s/g, ""),
  }));


const tempForecasts = (arr) =>
  arr.map((obj) => {
    const f = parseInt(obj.temperature);
    const c = Math.floor(((f - 32) * 5) / 9);
    const city = obj.city;
    const state = obj.state[0].toUpperCase() + obj.state.slice(1);
    return `${c}°Celsius in ${city}, ${state}`;
  });
