import { styles } from "./pimp-my-style.data.js";

let index = 0;
let removing = false;

export const pimp = () => {
  const button = document.querySelector(".button");

  if (!removing) {
    button.classList.add(styles[index]);
    index++;
    if (index === styles.length) {
      removing = true;
      button.classList.toggle("unpimp");
    }
  } else {
    index--;
    button.classList.remove(styles[index]);
    if (index === 0) {
      removing = false;
      button.classList.toggle("unpimp");
    }
  }
};
