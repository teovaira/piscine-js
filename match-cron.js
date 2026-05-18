const matchCron = (cron, date) => {
  const [minute, hour, dayOfMonth, month, dayOfWeek] = cron.split(" ");

  const match = (field, value) => field === "*" || Number(field) === value;

  const dow = date.getDay() === 0 ? 7 : date.getDay();

  return (
    match(minute, date.getMinutes()) &&
    match(hour, date.getHours()) &&
    match(dayOfMonth, date.getDate()) &&
    match(month, date.getMonth() + 1) &&
    match(dayOfWeek, dow)
  );
};
