// Find longest string

const findLongestString = function (line = []) {
  let maxLength = 0;
  let longestString = 'Not found';
  for (let string of line) {
    if (string.length > maxLength) {
      maxLength = string.length;
      longestString = string;
    }
  }
  Object.assign(line, { length: s.length });
  return s;
};

module.exports = findLongestString;
