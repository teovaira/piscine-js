import { readdir } from "fs/promises";

const dir = process.argv[2] || ".";

const entries = await readdir(dir);

const names = entries.map((file) => {
  const base = file.replace(/\.[^.]+$/, "");
  const [first, last] = base.split("_");
  return `${last} ${first}`;
});

const sorted = names.sort((a, b) => a.localeCompare(b));

sorted.forEach((name, i) => console.log(`${i + 1}. ${name}`));
