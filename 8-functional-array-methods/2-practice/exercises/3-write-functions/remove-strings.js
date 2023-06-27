/**
 * Removes all strings from an array.
 * Returns a new array without modifying the original.
 *
 * @param {Array} arr - The array of values to filter.
 * @returns {Array} - A new array with no strings.
 */
export const removeStrings = (arr = []) => {
  return arr.filter((value) => typeof value !== 'string');
};
