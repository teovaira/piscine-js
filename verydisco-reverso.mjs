import { readFile } from "fs/promises";

const filename = process.argv[2];

const undisco = (word) => {
  const mid = Math.floor(word.length / 2);
  return word.slice(mid) + word.slice(0, mid);
};

try {
  const content = await readFile(filename, "utf8");
  const result = content.split(" ").map(undisco).join(" ");
  console.log(result);
} catch (err) {
  console.error(err.message);
}
