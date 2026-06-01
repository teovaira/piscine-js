import { createServer } from "http";
import { writeFile, mkdir } from "fs/promises";

const authorized = {
  Caleb_Squires: "abracadabra",
  Tyrique_Dalton: "abracadabra",
  Rahima_Young: "abracadabra",
};

const readBody = (req) =>
  new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    req.on("end", () => resolve(Buffer.concat(chunks).toString()));
    req.on("error", reject);
  });

const server = createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const body = await readBody(req);
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
  try {
    const name = req.url.slice(1);
    await mkdir("guests", { recursive: true });
    await writeFile(`guests/${name}.json`, body);
    res.writeHead(200);
    res.write(body);
    res.end();
  } catch (err) {
    res.writeHead(500);
    res.end(JSON.stringify({ error: "server failed" }));
  }
});

server.listen(5000, () => console.log("Listening on port 5000"));
