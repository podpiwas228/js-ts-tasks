/**
 * Write a function which from the given array creates a new array
 * where each array item defines the sum of elements from 0 index up to i-th index (included)
 * @param {number[]} arr - The array of numbers.
 * @returns {number[]} - The new array with partial sums.
 */
module.exports.partialSum = function partialSum(arr) {
  let result = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    result.push(sum);
  }

  return result;
};
