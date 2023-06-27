/**
 * Replaces a specific entry in an array.
 * This function does not modify the original array.
 *
 * @param {Array} [arr=[]] - An array of items, one will be changed.
 * @param {number} [index=0] - The index to replace.
 * @param {any} newEntry - The value to put at that index.
 *
 * @returns {Array} - A copy of the array with one entry modified.
 */
export const replaceEntry = (arr = [], index = 0, newEntry) => {
  if (index < 0 || index >= arr.length) {
    return [...arr];
  }

  const newArray = [...arr];
  newArray[index] = newEntry;
  return newArray;
};
