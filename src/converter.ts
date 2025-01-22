/**
 * Converts temperature, weight, and distance with precision of 2 decimal places.
 * @param {string | number} value - The value to convert.
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from - The unit to convert from.
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to - The unit to convert to.
 * @returns {number} - The converted value rounded to 2 decimal places.
 */
module.exports.converter = function (value: number | string, from: string, to: string): number {
  if (typeof value === "string") {
    value = parseFloat(value);
  }

  if (isNaN(value)) {
    throw new Error("Invalid value provided for conversion.");
  }

  const conversions: { [key: string]: { [key: string]: (v: number) => number } } = {
    m: {
      mi: (v) => v * 0.000621371, 
      m: (v) => v,                
    },
    mi: {
      m: (v) => v / 0.000621371, 
      mi: (v) => v,              
    },

    gr: {
      pound: (v) => v * 0.00220462, 
      gr: (v) => v,                 
    },
    pound: {
      gr: (v) => v / 0.00220462,   
      pound: (v) => v,              
    },
    C: {
      K: (v) => v + 273.15,         
      C: (v) => v,                  
    },
    K: {
      C: (v) => v - 273.15,         
      K: (v) => v,                  
    },
  };


  if (!conversions[from] || !conversions[from][to]) {
    throw new Error(`Conversion from '${from}' to '${to}' is not supported.`);
  }

  const result = conversions[from][to](value);
  return Math.round(result * 100) / 100;
};
