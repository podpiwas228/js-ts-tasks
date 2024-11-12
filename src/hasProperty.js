/**
 * Check if an object contains property {prop}
 * @param {Object} object - The object to check.
 * @param {string} prop - The property to check for.
 * @returns {boolean} -
 */
module.exports.hasProperty = function hasProperty(object, prop) {
  return prop in object;
};
