import { colors } from "./fifty-shades-of-cold.data.js";

const coldKeywords = [
  "aqua",
  "blue",
  "turquoise",
  "green",
  "cyan",
  "navy",
  "purple",
];

export const generateClasses = () => {
  const style = document.createElement("style");
  colors.forEach((color) => {
    style.textContent += `.${color} { background: ${color}; }\n`;
  });
  document.head.append(style);
};

export const generateColdShades = () => {
  const cold = colors.filter((color) =>
    coldKeywords.some((keyword) => color.toLowerCase().includes(keyword)),
  );
  cold.forEach((color) => {
    const div = document.createElement("div");
    div.className = color;
    div.textContent = color;
    div.addEventListener("click", () => choseShade(color));
    document.body.append(div);
  });
};

export const choseShade = (shade) => {
  const divs = document.querySelectorAll("div");
  divs.forEach((div) => {
    if (!div.classList.contains(shade)) {
      div.className = shade;
    }
  });
};
