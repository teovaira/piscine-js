import { places } from "./where-do-we-go.data.js";

export const explore = () => {
  const sorted = [...places].sort(
    (a, b) => b.coordinates[0] - a.coordinates[0],
  );

  sorted.forEach((place) => {
    const section = document.createElement("section");
    const name = place.name.toLowerCase().replace(/ /g, "-");
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
    const [lat, lon] = place.coordinates;
    location.textContent = `${place.name}\n${lat}\n${lon}`;
    location.style.color = place.color;
    location.href = `https://www.google.com/maps?q=${lat},${lon}`;
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
