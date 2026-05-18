const format = (date, str) => {
  const y = date.getFullYear();
  const M = date.getMonth();
  const d = date.getDate();
  const H = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  const dow = date.getDay();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const h12 = H % 12 === 0 ? 12 : H % 12;
  const pad = (n) => String(n).padStart(2, "0");
  const padY = (n) => String(n).padStart(4, "0");

  const tokens = {
    yyyy: padY(y),
    y: String(y),
    GGGG: y > 0 ? "Anno Domini" : "Before Christ",
    G: y > 0 ? "AD" : "BC",
    MMMM: months[M],
    MMM: monthsShort[M],
    MM: pad(M + 1),
    M: String(M + 1),
    dd: pad(d),
    d: String(d),
    EEEE: days[dow],
    E: daysShort[dow],
    HH: pad(H),
    H: String(H),
    hh: pad(h12),
    h: String(h12),
    mm: pad(m),
    m: String(m),
    ss: pad(s),
    s: String(s),
    a: H < 12 ? "AM" : "PM",
  };

  return str.replace(
    /yyyy|y|GGGG|G|MMMM|MMM|MM|M|dd|d|EEEE|E|HH|H|hh|h|mm|m|ss|s|a/g,
    (token) => tokens[token],
  );
};
