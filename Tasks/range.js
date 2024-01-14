// Generate int array from given range

const generateArrayRange = (...range) => {
  let [from, to] = range;
  if (to >= from) {
    const resultArray = [];
    for (let i = from; i <= to; i++) {
      resultArray.push(i);
    }
    return resultArray
  } else {
    return [];
  }
};

module.exports = generateArrayRange;
