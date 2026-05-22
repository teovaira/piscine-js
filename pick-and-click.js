export const pick = () => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.style.cssText =
    "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none";

  const axisX = document.createElementNS("http://www.w3.org/2000/svg", "line");
  axisX.id = "axisX";
  axisX.setAttribute("y1", "0");
  axisX.setAttribute("y2", "100%");
  axisX.setAttribute("stroke", "white");

  const axisY = document.createElementNS("http://www.w3.org/2000/svg", "line");
  axisY.id = "axisY";
  axisY.setAttribute("x1", "0");
  axisY.setAttribute("x2", "100%");
  axisY.setAttribute("stroke", "white");

  svg.append(axisX, axisY);
  document.body.append(svg);

  const hslDiv = document.createElement("div");
  hslDiv.className = "hsl";
  document.body.append(hslDiv);

  const hueDiv = document.createElement("div");
  hueDiv.className = "hue";
  document.body.append(hueDiv);

  const lumDiv = document.createElement("div");
  lumDiv.className = "luminosity";
  document.body.append(lumDiv);

  document.addEventListener("mousemove", (e) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const hue = Math.round((e.clientX / w) * 360);
    const lum = Math.round((e.clientY / h) * 100);
    const hslValue = `hsl(${hue}, 50%, ${lum}%)`;

    document.body.style.background = hslValue;
    hslDiv.textContent = hslValue;
    hueDiv.textContent = hue;
    lumDiv.textContent = lum;

    axisX.setAttribute("x1", e.clientX);
    axisX.setAttribute("x2", e.clientX);
    axisY.setAttribute("y1", e.clientY);
    axisY.setAttribute("y2", e.clientY);
  });

  document.addEventListener("click", () => {
    navigator.clipboard.writeText(hslDiv.textContent);
  });
};
