const findIP = (str) => {
  const octet = "(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)";
  const ip = `${octet}\\.${octet}\\.${octet}\\.${octet}`;
  const port =
    "(:(6553[0-5]|655[0-2]\\d|65[0-4]\\d\\d|6[0-4]\\d{3}|[1-5]\\d{4}|[1-9]\\d{1,3}|\\d))?";
  const pattern = new RegExp(`(?<![\\d.])${ip}${port}(?![\\d.])`, "g");
  const matches = [...str.matchAll(pattern)];
  return matches.map((m) => m[0]);
};
