/**
 * Casts all values to a string and concatenates them.
 * Returns a new array without modifying the original.
 *
 * @param {Array} arr - The array of values to filter.
 * @returns {string} - The concatenated string.
 */
export const concatenateAsStrings = (arr = []) => {
  return arr.reduce((acc, value) => {
    return acc + String(value);
  }, '');
};
