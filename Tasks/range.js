// Generate int array from given range
'use strict';

const generateRangeArray = (...range) => {
  let [from, to] = range;

  if (to >= from) {
    const resultArray = [];
    for (let i = from; i <= to; i++) {
      resultArray.push(i);
    }
    return resultArray;
  } else {
    return [];
  }
};

module.exports = generateRangeArray;
