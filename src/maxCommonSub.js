/**
 * Write a function which finds a maximal common substring of two given strings.
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {string}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  let maxSubstr = '';
  let kaze1 = str1.length;
  let kaze2 = str2.length;

  for (let i = 0; i < kaze1; i++) {
    for (let j = i + 1; j <= kaze1; j++) {
      let substr = str1.slice(i, j);
      if (str2.includes(substr) && substr.length > maxSubstr.length) {
        maxSubstr = substr;
      }
    }
  }

  return maxSubstr;
};
