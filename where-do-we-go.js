import { places } from "./where-do-we-go.data.js";

const parseLat = (coords) => {
  const match = coords.match(/(\d+)°(\d+)'([\d.]+)"([NS])/);
  if (!match) return 0;
  const [, deg, min, sec, dir] = match;
  const decimal = Number(deg) + Number(min) / 60 + Number(sec) / 3600;
  return dir === "N" ? decimal : -decimal;
};

export const explore = () => {
  const sorted = [...places].sort(
    (a, b) => parseLat(b.coordinates) - parseLat(a.coordinates),
  );

  sorted.forEach((place) => {
    const section = document.createElement("section");
    const name = place.name
      .toLowerCase()
      .split(",")[0]
      .trim()
      .replace(/ /g, "-");
    section.style.background = `url(./where-do-we-go_images/${name}.jpg) center/cover no-repeat`;
    document.body.append(section);
  });

  const location = document.createElement("a");
  location.className = "location";
  location.target = "_blank";
  document.body.append(location);

  const direction = document.createElement("div");
  direction.className = "direction";
  document.body.append(direction);

  const updateLocation = (place) => {
    location.textContent = `${place.name}\n${place.coordinates}`;
    location.style.color = place.color;
    const lat = parseLat(place.coordinates);
    location.href = `https://www.google.com/maps?q=${lat},0`;
  };

  updateLocation(sorted[0]);

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const mid = window.scrollY + window.innerHeight / 2;
    const sections = document.querySelectorAll("section");
    sections.forEach((section, i) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (mid >= top && mid < bottom) updateLocation(sorted[i]);
    });
    direction.textContent = window.scrollY > lastScrollY ? "S" : "N";
    lastScrollY = window.scrollY;
  });
};
