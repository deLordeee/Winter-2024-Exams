// Get day number

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

parseDay = (s) => {
  let i;
  for (i = 0; i < D.length; i++) {
    if (s.startsWith(D[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
