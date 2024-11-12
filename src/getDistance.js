/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  var p = parseFloat(firstPoint.X);
  var l = parseFloat(firstPoint.Y);
  var p1 = parseFloat(secondPoint.X);
  var l1 = parseFloat(secondPoint.Y);
  let z1 = Math.sqrt(Math.pow(p - p1, 2) + Math.pow(l - l1, 2));
  let z = parseFloat(z1.toFixed(2));
  return z;
};
