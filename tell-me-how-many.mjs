import { readdir } from "fs/promises";

const dir = process.argv[2] || ".";

try {
  const entries = await readdir(dir);
  console.log(entries.length);
} catch (err) {
  console.error(err.message);
}
