module.exports.pangram = function (word: string | number): boolean {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const digits = "0123456789";
  
    if (typeof word === "number") {
      word = word.toString();
    }
  
    const lowerCasedWord = word.toLowerCase();
    const isAlphaPangram = alphabet.split("").every(letter => lowerCasedWord.includes(letter));
    const isDigitPangram = digits.split("").every(digit => lowerCasedWord.includes(digit));
  
    return isAlphaPangram || isDigitPangram;
  };
  