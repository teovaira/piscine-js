import { createServer } from "http";
import { writeFile } from "fs/promises";

const server = createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const name = req.url.slice(1);
    const body = await new Promise((resolve, reject) => {
      let data = "";
      req.on("data", (chunk) => (data += chunk));
      req.on("end", () => resolve(data));
      req.on("error", reject);
    });
    await writeFile(`guests/${name}.json`, body);
    res.writeHead(201);
    res.end(body);
  } catch {
    res.writeHead(500);
    res.end(JSON.stringify({ error: "server failed" }));
  }
});

server.listen(5000, () => console.log("Listening on port 5000"));
