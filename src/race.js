export const race = function race(promisesArray) {
  return new Promise((resolve, reject) => {
    promisesArray.forEach(promise => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
};
