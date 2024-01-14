// Return an array without duplicates

deleteDuplicates = (value, N) => {
  if (N <= 0) return [];
  else {
    result = [];
    for (let i = 0; i < N; i++) {
      result[i] = value;
    }
    return result;
  }
};

module.exports = deleteDuplicates;
