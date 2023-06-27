/**
 * Filters an array to keep only the elements of a specific type.
 *
 * @param {Array} [things=[]] - The array of elements to filter.
 * @param {string} [type=''] - The type to keep in the array (e.g., 'string', 'number', 'object').
 * @returns {Array} - A new array with elements of the specified type.
 */
export const keepType = (things = [], type = '') => {
  return things.filter((thing) => {
    return typeof thing === type;
  });
};
