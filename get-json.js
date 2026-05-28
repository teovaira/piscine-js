const getJSON = async (path, params = {}) => {
  const url = new URL(path);
  Object.entries(params).forEach(([k, v]) => url.searchParams.append(k, v));

  const response = await fetch(url);
  if (!response.ok) throw new Error(response.statusText);

  const body = await response.json();
  if (body.error) throw new Error(body.error);

  return body.data;
};
