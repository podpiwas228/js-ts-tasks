module.exports.pangram = function (word: string | number): boolean {
  const wordStr = String(word);
  if (isNaN(Number(word))) {
    const letters = new Set(wordStr.toLowerCase().replace(/[^a-z]/g, ''));
    return letters.size === 26; 
  }


  const digits = new Set(wordStr.replace(/[^0-9]/g, ''));
  return digits.size === 10; 
};
