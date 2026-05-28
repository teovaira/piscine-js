const queryServers = (serverName, q) =>
  Promise.race([
    getJSON(`/${serverName}?q=${q}`),
    getJSON(`/${serverName}_backup?q=${q}`),
  ]);

const gougleSearch = async (q) => {
  const timer = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("timeout")), 80),
  );

  const [web, image, video] = await Promise.race([
    Promise.all([
      queryServers("web", q),
      queryServers("image", q),
      queryServers("video", q),
    ]),
    timer,
  ]);

  return { web, image, video };
};
