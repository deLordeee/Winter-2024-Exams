// Reverse an array, you can't use .reverse()

'use strict';

const reverseArray = (arr) => {
  const resultArray = [];

  for (const element of arr) {
    resultArray.unshift(element);
  }

  return resultArray;
};

module.exports = reverseArray;
