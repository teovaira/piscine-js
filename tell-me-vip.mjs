import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";

const dir = process.argv[2] || ".";

const entries = await readdir(dir);

const guests = await Promise.all(
  entries.map(async (file) => {
    const content = await readFile(join(dir, file), "utf8");
    const data = JSON.parse(content);
    const base = file.replace(/\.[^.]+$/, "");
    const [first, last] = base.split("_");
    return { name: `${last} ${first}`, answer: data.answer };
  }),
);

const vips = guests
  .filter((g) => g.answer === "YES")
  .sort((a, b) => a.name.localeCompare(b.name));

const output = vips.map((g, i) => `${i + 1}. ${g.name}`).join("\n");

console.log(output);
await writeFile("vip.txt", output);
