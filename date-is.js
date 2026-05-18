const isValid = (date) => {
  if (typeof date === "number") return !isNaN(date);
  return date instanceof Date && !isNaN(date.getTime());
};

const isAfter = (date1, date2) => date1 > date2;

const isBefore = (date1, date2) => date1 < date2;

const isFuture = (date) => isValid(date) && date > new Date();

const isPast = (date) => isValid(date) && date < new Date();
