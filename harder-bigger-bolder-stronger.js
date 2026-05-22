export const generateLetters = () => {
  const total = 120;
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < total; i++) {
    const div = document.createElement("div");
    div.textContent = alphabet[Math.floor(Math.random() * 26)];
    div.style.fontSize = `${Math.round(11 + (i * (130 - 11)) / (total - 1))}px`;

    if (i < total / 3) div.style.fontWeight = "300";
    else if (i < (total / 3) * 2) div.style.fontWeight = "400";
    else div.style.fontWeight = "600";

    document.body.append(div);
  }
};
