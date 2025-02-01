/**
 * Converts temperature, weight, and distance with precision of two digits after the decimal point.
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {number}
 */
export function converter(value: string | number, from: 'm' | 'mi' | 'gr' | 'pound' | 'C' | 'K', to: 'm' | 'mi' | 'gr' | 'pound' | 'C' | 'K'): number {
  value = parseFloat(value.toString());
  let result: number | undefined;

  switch (from) {
    case 'm': // Meters to miles
      if (to === 'mi') result = value * 0.000621371;
      break;
    case 'mi': // Miles to meters
      if (to === 'm') result = value / 0.000621371;
      break;
    case 'gr': // Grams to pounds
      if (to === 'pound') result = value * 0.00220462;
      break;
    case 'pound': // Pounds to grams
      if (to === 'gr') result = value / 0.00220462;
      break;
    case 'C': // Celsius to Kelvin
      if (to === 'K') result = value + 273.15;
      break;
    case 'K': // Kelvin to Celsius
      if (to === 'C') result = value - 273.15;
      break;
    default:
      throw new Error('Invalid conversion');
  }

  if (result === undefined) {
    throw new Error('Invalid conversion');
  }

  return parseFloat(result.toFixed(2));
}
