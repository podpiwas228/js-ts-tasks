export const all = function all(promisesArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promisesArray)) {
      return reject(new Error('Argument is not an array'));
    }

    let results = [];
    let completedPromises = 0;

    promisesArray.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completedPromises += 1;

          if (completedPromises === promisesArray.length) {
            resolve(results);
          }
        })
        .catch(err => {
          reject(err);
        });
    });

    if (promisesArray.length === 0) {
      resolve(results);
    }
  });
};
