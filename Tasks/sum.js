// Sum all numbers from an array
'use strict';
const sum = (arr = []) => {
  let resultSum = 0;
  
  for (const value of arr) {
    if (typeof value === 'number') {
      resultSum += value;
    }
  }
  
  return resultSum;
};

module.exports = sum;
