// Generate int array from given range

const generateArrayRange = (...range) => {
  let [from, to] = range;
  if (to >= from) {
    const resultArray = [];
    for (let i = from; i <= to; i++) {
      range[i - from] = i;
    }
  } else {
    return [];
  }
  return range;
};

module.exports = generateArrayRange;
