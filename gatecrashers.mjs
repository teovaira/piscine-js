import { createServer } from "http";
import { writeFile } from "fs/promises";

const authorized = {
  Caleb_Squires: "abracadabra",
  Tyrique_Dalton: "abracadabra",
  Rahima_Young: "abracadabra",
};

const server = createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    res.writeHead(401);
    return res.end(JSON.stringify("Authorization Required"));
  }

  const base64 = authHeader.split(" ")[1];
  const [user, password] = Buffer.from(base64, "base64").toString().split(":");

  if (authorized[user] !== password) {
    res.writeHead(401);
    return res.end(JSON.stringify("Authorization Required"));
  }

  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });
  req.on("end", async () => {
    try {
      const name = req.url.slice(1);
      await writeFile(`guests/${name}.json`, data);
      res.writeHead(200);
      res.end(data);
    } catch {
      res.writeHead(500);
      res.end(JSON.stringify({ error: "server failed" }));
    }
  });
});

server.listen(5000, () => console.log("Listening on port 5000"));
