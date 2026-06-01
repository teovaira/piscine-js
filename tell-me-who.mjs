import { readdir, readFile } from "fs/promises";
import { join } from "path";

const dir = process.argv[2] || ".";

const entries = await readdir(dir);

const names = await Promise.all(
  entries.map((file) => readFile(join(dir, file), "utf8")),
);

const sorted = names
  .map((content) => content.trim())
  .sort((a, b) => a.localeCompare(b));

sorted.forEach((name, i) => console.log(`${i + 1}. ${name}`));
