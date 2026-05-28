const isWinner = async (country) => {
  let winner;
  try {
    winner = await db.getWinner(country);
  } catch {
    return `${country} never was a winner`;
  }

  if (winner.continent !== "Europe") {
    return `${country} is not what we are looking for because of the continent`;
  }

  let wins;
  try {
    wins = await db.getResults(winner.id);
  } catch {
    return `${country} is not what we are looking for because of the number of times it was champion`;
  }

  if (wins.length < 3) {
    return `${country} is not what we are looking for because of the number of times it was champion`;
  }

  const years = wins.map((w) => w.year).join(", ");
  const results = wins.map((w) => w.score).join(", ");
  return `${country} won the FIFA World Cup in ${years} winning by ${results}`;
};
