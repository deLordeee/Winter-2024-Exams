// Find longest string
'use strict';
const findLongestString = function (line = []) {
  let maxLength = 0;
  let longestString = 'Not found';
  for (let string of line) {
    if (string.length > maxLength) {
      maxLength = string.length;
      longestString = string;
    }
  }
  return longestString ;
};

module.exports = findLongestString;
