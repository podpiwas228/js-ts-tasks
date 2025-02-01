/**
 * Determines if the provided string/number is a pangram.
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once.
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once.
 * @param {string | number} word
 * @returns {boolean}
 */
export function pangram(word: string | number): boolean {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';
  const str = word.toString().toLowerCase();

  if (typeof word === 'string') {
    return alphabet.split('').every(letter => str.includes(letter));
  } else if (typeof word === 'number' || typeof word === 'string') {
    return digits.split('').every(digit => str.includes(digit));
  }

  return false;
}
