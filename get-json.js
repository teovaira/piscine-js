const encode = (v) => encodeURIComponent(v).replace(/%20/g, "+");

const getJSON = async (path, params = {}) => {
  const entries = Object.entries(params);
  const query = entries.length
    ? "?" + entries.map(([k, v]) => `${encode(k)}=${encode(v)}`).join("&")
    : "";
  const url = path + query;

  const response = await fetch(url);
  if (!response.ok) throw new Error(response.statusText);

  const body = await response.json();
  if (body.error) throw new Error(body.error);

  return body.data;
};
