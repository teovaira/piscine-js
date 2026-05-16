const dnaToRna = { G: "C", C: "G", T: "A", A: "U" };
const rnaToDna = { C: "G", G: "C", A: "T", U: "A" };

const RNA = (str) =>
  str
    .split("")
    .map((c) => dnaToRna[c])
    .join("");
const DNA = (str) =>
  str
    .split("")
    .map((c) => rnaToDna[c])
    .join("");
