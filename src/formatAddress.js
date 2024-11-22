/**
 * Write a function which returns a formatter function to format address based on input address data
 * Format should be the following: 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
module.exports.formatAddress = function formatAddress() {
  return function (address) {
    let formattedAddress = '';
    const order = ['street', 'house', 'apartment', 'city', 'postalCode', 'country'];

    for (let i = 0; i < order.length; i++) {
      let key = order[i];
      if (address[key]) {
        if (formattedAddress.length > 0) {
          formattedAddress += ', ';
        }
        formattedAddress += address[key];
      }
    }
    return formattedAddress;
  };
};
