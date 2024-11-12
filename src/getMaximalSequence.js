/**
 * Write a script that finds the maximal sequence of equal elements in an array.
 * If there are more than one, return the first.
 * @param {Array} arr - The array to search.
 * @returns {Array} - The maximal sequence of equal elements.
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  if (arr.length === 0) return [];

  let maxSequence = [];
  let Sequence1 = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      Sequence1.push(arr[i]);
    } else {
      if (Sequence1.length > maxSequence.length) {
        maxSequence = Sequence1;
      }
      Sequence1 = [arr[i]];
    }
  }
  if (Sequence1.length > maxSequence.length) {
    maxSequence = Sequence1;
  }

  return maxSequence;
};
