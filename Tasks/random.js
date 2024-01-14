// Generate random integer value in given range

const getRandomInt = (min, max = min) => {
  if (max === undefined) {
    return Math.floor(Math.random() * (max + 1));
  } else {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
};

module.exports = getRandomInt;
