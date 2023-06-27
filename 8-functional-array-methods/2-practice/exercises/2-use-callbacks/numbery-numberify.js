/**
 * Takes an array of strings and returns a new array containing the numbery strings cast to numbers.
 * Filters out NaN values.
 * Does not modify the original array.
 * @param {string[]} arr - The array of strings.
 * @returns {number[]} An array containing numbers that are not NaN.
 */
export const numberyNumberify = (arr) => {
  const isNumberyString = (entry) => {
    return !Number.isNaN(Number(entry));
  };

  const castToNumber = (entry) => {
    return Number(entry);
  };

  const allValidNumbers = arr.filter(isNumberyString).map(castToNumber);

  return allValidNumbers;
};

