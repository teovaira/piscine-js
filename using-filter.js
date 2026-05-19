const filterShortStateName = (arr) => arr.filter((str) => str.length < 7);

const filterStartVowel = (arr) => arr.filter((str) => /^[aeiou]/i.test(str));

const filter5Vowels = (arr) =>
  arr.filter((str) => (str.match(/[aeiou]/gi) || []).length >= 5);

const filter1DistinctVowel = (arr) =>
  arr.filter((str) => {
    const vowels = str.match(/[aeiou]/gi) || [];
    const distinct = new Set(vowels.map((v) => v.toLowerCase()));
    return distinct.size === 1;
  });

const multiFilter = (arr) =>
  arr.filter(
    (obj) =>
      obj.capital.length >= 8 &&
      !/^[aeiou]/i.test(obj.name) &&
      /[aeiou]/i.test(obj.tag) &&
      obj.region !== "South",
  );
