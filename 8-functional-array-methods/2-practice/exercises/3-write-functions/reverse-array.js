/**
 * Reverses an array of anything.
 *
 * @param {Array} [arr=[]] - The array to reverse.
 * @returns {Array} - A new array with the items reversed.
 */
export const reverseArray = (arr = []) => {
  return arr.slice().reverse();
};
