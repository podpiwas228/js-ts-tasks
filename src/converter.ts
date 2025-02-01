/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {number}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  if (typeof value === 'string') {
      value = parseFloat(value);
  }

  let result: number;
  
  switch (from) {
      case 'C':
          if (to === 'K') {
              result = value + 273.15;
          } else {
              throw new Error('Unsupported conversion');
          }
          break;
      case 'K':
          if (to === 'C') {
              result = value - 273.15;
          } else {
              throw new Error('Unsupported conversion');
          }
          break;
      case 'm':
          if (to === 'mi') {
              result = value * 0.000621371;
          } else {
              throw new Error('Unsupported conversion');
          }
          break;
      case 'mi':
          if (to === 'm') {
              result = value / 0.000621371;
          } else {
              throw new Error('Unsupported conversion');
          }
          break;
      case 'gr':
          if (to === 'pound') {
              result = value * 0.00220462;
          } else {
              throw new Error('Unsupported conversion');
          }
          break;
      case 'pound':
          if (to === 'gr') {
              result = value / 0.00220462;
          } else {
              throw new Error('Unsupported conversion');
          }
          break;
      default:
          throw new Error('Unsupported conversion');
  }

  return Math.round(result * 100) / 100; 
};
