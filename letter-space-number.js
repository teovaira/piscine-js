const letterSpaceNumber = (str) =>
  str.match(/[a-zA-Z] \d(?![0-9a-zA-Z])/g) || [];
