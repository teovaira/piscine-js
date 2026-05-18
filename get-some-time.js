const firstDayWeek = (week, year) => {
  const jan1 = new Date(`${year}-01-01`);
  const jan1Day = jan1.getDay();
  const mondayOffset = jan1Day === 0 ? -6 : 1 - jan1Day;
  const firstMonday = new Date(jan1);
  firstMonday.setDate(1 + mondayOffset);

  const target = new Date(firstMonday);
  target.setDate(firstMonday.getDate() + (week - 1) * 7);

  if (target.getFullYear() < Number(year)) return `01-01-${year}`;

  const dd = String(target.getDate()).padStart(2, "0");
  const mm = String(target.getMonth() + 1).padStart(2, "0");
  const yyyy = String(target.getFullYear()).padStart(4, "0");
  return `${dd}-${mm}-${yyyy}`;
};
