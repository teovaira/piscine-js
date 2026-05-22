export const getArchitects = () => {
  const architects = [...document.getElementsByTagName("a")];
  const nonArchitects = [...document.querySelectorAll(":not(a)")];
  return [architects, nonArchitects];
};

export const getClassical = () => {
  const classical = [...document.querySelectorAll("a.classical")];
  const nonClassical = [...document.querySelectorAll("a:not(.classical)")];
  return [classical, nonClassical];
};

export const getActive = () => {
  const active = [...document.querySelectorAll("a.classical.active")];
  const nonActive = [...document.querySelectorAll("a.classical:not(.active)")];
  return [active, nonActive];
};

export const getBonannoPisano = () => {
  const bonanno = document.getElementById("BonannoPisano");
  const rest = [
    ...document.querySelectorAll("a.classical.active:not(#BonannoPisano)"),
  ];
  return [bonanno, rest];
};
