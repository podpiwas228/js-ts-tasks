/**
 * Removes items from the given array that are equal to the specified value.
 * @param {Array} arr - The array from which to remove items.
 * @param {any} value - The value to remove from the array.
 * @returns {Array} - The modified array with the specified value removed.
 */
module.exports.removeItems = function removeItems(arr, value) {
  return arr.filter(function (element) {
    if (typeof element === 'object' && element !== null && typeof value === 'object' && value !== null) {
      return !vtor(element, value);
    } else {
      return element !== value;
    }
  });
};
function vtor(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (!keys2.includes(key) || !vtor(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}
