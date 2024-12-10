class User {
  constructor(firstName, secondName, age) {
    if (!firstName || !secondName || !age) {
      throw new Error('Invalid data');
    }
    if (typeof firstName !== 'string' || typeof secondName !== 'string' || typeof age !== 'number') {
      throw new Error('Wrong data types');
    }
    this._firstName = firstName;
    this._secondName = secondName;
    this.age = age;
  }

  set firstName(value) {
    this._firstName = value;
  }

  set secondName(value) {
    this._secondName = value;
  }

  get name() {
    return `${this._firstName} ${this._secondName}`;
  }

  introduce() {
    return `My name is ${this.name}, I'm ${this.age}`;
  }

  celebrateBirthday() {
    this.age += 1;
  }
}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
  return new User(firstName, secondName, age);
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
  return data.map(user => new User(user.firstName, user.secondName, user.age));
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<User>} users
 * @param {number} age
 * @returns {Array<User>}
 */
module.exports.findUsersByAge = function (users, age) {
  return users.filter(user => user.age === age);
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  return function (users) {
    return users.sort(TestUtils.comparator);
  };
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  return users.map((user, index) => {
    if (index % 2 === 0) {
      user.celebrateBirthday();
    }
    return user;
  });
};
