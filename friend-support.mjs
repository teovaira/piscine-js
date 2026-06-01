import { createServer } from "http";
import { readFile } from "fs/promises";

const server = createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const name = req.url.slice(1);
    try {
      const content = await readFile(`${name}.json`, "utf8");
      res.writeHead(200);
      res.end(content);
    } catch {
      res.writeHead(404);
      res.end(JSON.stringify({ error: "guest not found" }));
    }
  } catch {
    res.writeHead(500);
    res.end(JSON.stringify({ error: "server failed" }));
  }
});

server.listen(5000, () => console.log("Listening on port 5000"));
