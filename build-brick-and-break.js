let brickCount = 0;

export const build = (amount) => {
  let built = 0;
  const interval = setInterval(() => {
    built++;
    brickCount++;
    const brick = document.createElement("div");
    brick.id = `brick-${brickCount}`;
    const column = brickCount % 3;
    if (column === 2) brick.dataset.foundation = "true";
    document.body.append(brick);
    if (built >= amount) clearInterval(interval);
  }, 100);
};

export const repair = (...ids) => {
  for (const id of ids) {
    const brick = document.getElementById(id);
    if (!brick) continue;
    if (brick.hasAttribute("data-foundation")) {
      brick.dataset.repaired = "in progress";
    } else {
      brick.dataset.repaired = "true";
    }
  }
};

export const destroy = () => {
  const brick = document.getElementById(`brick-${brickCount}`);
  if (brick) {
    brick.remove();
    brickCount--;
  }
};
