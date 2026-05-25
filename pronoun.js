const pronoun = (str) => {
  const pronouns = new Set(["i", "you", "he", "she", "it", "they", "we"]);
  const words = str.toLowerCase().match(/[a-z]+/g) || [];
  const result = {};

  words.forEach((word, i) => {
    if (!pronouns.has(word)) return;
    if (!result[word]) result[word] = { word: [], count: 0 };
    result[word].count++;
    const next = words[i + 1];
    if (next && !pronouns.has(next)) result[word].word.push(next);
  });

  return result;
};

