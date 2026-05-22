export const createCircle = () => {
  document.addEventListener("click", (e) => {
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.background = "white";
    circle.style.left = `${e.clientX}px`;
    circle.style.top = `${e.clientY}px`;
    circle.style.position = "fixed";
    document.body.append(circle);
  });
};

export const moveCircle = () => {
  document.addEventListener("mousemove", (e) => {
    const circles = document.querySelectorAll(".circle");
    if (circles.length === 0) return;
    const last = circles[circles.length - 1];
    if (last.dataset.trapped) return;
    last.style.left = `${e.clientX}px`;
    last.style.top = `${e.clientY}px`;
    checkTrap(last);
  });
};

const checkTrap = (circle) => {
  const box = document.querySelector(".box");
  if (!box) return;
  const b = box.getBoundingClientRect();
  const c = circle.getBoundingClientRect();
  if (
    c.left > b.left &&
    c.right < b.right &&
    c.top > b.top &&
    c.bottom < b.bottom
  ) {
    circle.style.background = "var(--purple)";
    circle.dataset.trapped = "true";
  }
};

export const setBox = () => {
  const box = document.createElement("div");
  box.className = "box";
  document.body.append(box);
};
