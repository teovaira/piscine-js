export const compose = () => {
  document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (key === "Backspace") {
      const notes = document.querySelectorAll(".note");
      if (notes.length > 0) notes[notes.length - 1].remove();
    } else if (key === "Escape") {
      document.querySelectorAll(".note").forEach((note) => note.remove());
    } else if (key.length === 1 && key >= "a" && key <= "z") {
      const div = document.createElement("div");
      div.className = "note";
      div.textContent = key;
      div.style.background = `hsl(${key.charCodeAt(0) * 13}, 70%, 60%)`;
      document.body.append(div);
    }
  });
};
