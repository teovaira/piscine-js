import { readFile, writeFile } from "fs/promises";

const [file, mode, outFile] = process.argv.slice(2);

const content = await readFile(file);

if (mode === "encode") {
  const encoded = Buffer.from(content).toString("base64");
  await writeFile(outFile || "cypher.txt", encoded);
} else if (mode === "decode") {
  const decoded = Buffer.from(content.toString(), "base64").toString("utf8");
  await writeFile(outFile || "clear.txt", decoded);
}
