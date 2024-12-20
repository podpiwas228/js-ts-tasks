export const mockApi = function mockApi(response, delay = 500) {
  return function (action) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (action === 'reject') {
          reject(new Error('Rejected'));
        } else {
          resolve(response);
        }
      }, delay);
    });
  };
};
