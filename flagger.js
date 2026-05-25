const flags = (obj) => {
  const keys = Object.keys(obj).filter((k) => k !== "help");
  const alias = { h: "help" };
  const usedLetters = new Set(["h"]);

  keys.forEach((key) => {
    for (const char of key) {
      if (!usedLetters.has(char[0].toLowerCase())) {
        const letter = char[0].toLowerCase();
        alias[letter] = key;
        usedLetters.add(letter);
        break;
      }
    }
  });

  const helpKeys = obj.help ? obj.help : keys;
  const descriptions = helpKeys.map((key) => {
    const letter = Object.keys(alias).find((k) => alias[k] === key);
    return `-${letter}, --${key}: ${obj[key]}`;
  });

  return {
    alias,
    description: descriptions.join("\n"),
  };
};
