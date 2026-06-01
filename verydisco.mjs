const input = process.argv[2];

const disco = (word) => {
  const mid = Math.ceil(word.length / 2);
  return word.slice(mid) + word.slice(0, mid);
};

const result = input.split(" ").map(disco).join(" ");
console.log(result);
