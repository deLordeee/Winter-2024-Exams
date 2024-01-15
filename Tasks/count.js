// Sum all number values in dict
'use strict';

const sumNumberValues = (obj) => {
  let sum = 0;

  for (const value of Object.values(obj)) {
    if (typeof value === 'number') {
      sum += value;
    }
  }

  return sum;
};

module.exports = sumNumberValues;
