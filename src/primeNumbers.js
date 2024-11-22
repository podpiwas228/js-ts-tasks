/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  return function (firsttnumber, lastnumber) {
    if (firsttnumber < 2) firsttnumber = 2;
    if (lastnumber > highestNumber) lastnumber = highestNumber;

    const primes = [];
    for (let i = firsttnumber; i <= lastnumber; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  };
};
