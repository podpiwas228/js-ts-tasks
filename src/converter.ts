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
    // Distance conversions
    m: {
      mi: (v) => v * 0.000621371, // meters to miles
      m: (v) => v,                // meters to meters (identity)
    },
    mi: {
      m: (v) => v / 0.000621371, // miles to meters
      mi: (v) => v,              // miles to miles (identity)
    },

    // Weight conversions
    gr: {
      pound: (v) => v * 0.00220462, // grams to pounds
      gr: (v) => v,                 // grams to grams (identity)
    },
    pound: {
      gr: (v) => v / 0.00220462,    // pounds to grams
      pound: (v) => v,              // pounds to pounds (identity)
    },

    // Temperature conversions
    C: {
      K: (v) => v + 273.15,         // Celsius to Kelvin
      C: (v) => v,                  // Celsius to Celsius (identity)
    },
    K: {
      C: (v) => v - 273.15,         // Kelvin to Celsius
      K: (v) => v,                  // Kelvin to Kelvin (identity)
    },
  };

  // Check if conversion from 'from' to 'to' is supported
  if (!conversions[from] || !conversions[from][to]) {
    throw new Error(`Conversion from '${from}' to '${to}' is not supported.`);
  }

  // Perform the conversion
  const result = conversions[from][to](value);
  return Math.round(result * 100) / 100;
};
