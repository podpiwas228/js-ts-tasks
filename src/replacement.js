/**
 * Write a function which for every number (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr - The array of numbers.
 * @returns {Array<number>} - The modified array with numbers replaced as specified.
 */
module.exports.replacement = function replacement(arr) {
  return arr.map(num => {
    let sum8 = Math.abs(num);
    if (sum8 < 10) return 1;
    if (sum8 < 100) return 2;
    if (sum8 < 1000) return 3;
    return 4;
  });
};
