const neuron = (arr) => {
  const result = {};

  arr.forEach((entry) => {
    const [left, response] = entry.split(" - Response: ");
    const colonIdx = left.indexOf(": ");
    const category = left.slice(0, colonIdx).toLowerCase();
    const content = left.slice(colonIdx + 2);

    if (!result[category]) result[category] = {};

    const key = content
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/_+$/g, "");
    const contentKey = category === "questions" ? "question" : "order";

    if (!result[category][key]) {
      result[category][key] = { [contentKey]: content, responses: [] };
    }

    result[category][key].responses.push(response);
  });

  return result;
};
