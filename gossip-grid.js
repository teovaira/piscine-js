import { gossips } from "./gossip-grid.data.js";

export const grid = () => {
  const ranges = document.createElement("div");
  ranges.className = "ranges";

  const makeRange = (id, min, max) => {
    const input = document.createElement("input");
    input.type = "range";
    input.className = "range";
    input.id = id;
    input.min = min;
    input.max = max;
    return input;
  };

  const widthRange = makeRange("width", 200, 800);
  const fontRange = makeRange("fontSize", 20, 40);
  const bgRange = makeRange("background", 20, 75);
  ranges.append(widthRange, fontRange, bgRange);
  document.body.append(ranges);

  const addCard = (text, prepend = false) => {
    const div = document.createElement("div");
    div.className = "gossip";
    div.textContent = text;
    prepend ? document.body.prepend(div) : document.body.append(div);
    return div;
  };

  const form = document.createElement("form");
  form.className = "gossip";
  const textarea = document.createElement("textarea");
  const submit = document.createElement("button");
  submit.type = "submit";
  submit.textContent = "Share gossip!";
  form.append(textarea, submit);
  document.body.append(form);

  gossips.forEach((g) => addCard(g));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (textarea.value.trim()) {
      addCard(textarea.value.trim());
      textarea.value = "";
    }
  });

  const cards = () => document.querySelectorAll(".gossip");

  widthRange.addEventListener("input", () => {
    cards().forEach((c) => (c.style.width = `${widthRange.value}px`));
  });

  fontRange.addEventListener("input", () => {
    cards().forEach((c) => (c.style.fontSize = `${fontRange.value}px`));
  });

  bgRange.addEventListener("input", () => {
    cards().forEach(
      (c) => (c.style.background = `hsl(30, 50%, ${bgRange.value}%)`),
    );
  });
};
