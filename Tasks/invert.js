// Reverse an array, you can't use .reverse()
'use strict';
 const reverseArray = (arr) => {
  const resultArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    resultArray.push(arr[i]);
  }
  return resultArray;
};

module.exports = reverseArray;
