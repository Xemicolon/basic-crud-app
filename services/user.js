const User = require("../models/User");

/**
 * @author Oluwatobiloba Agunloye
 * @class This function is a class constructor.
 * @classdesc It performs Create, read, update and delete operations.
 *
 */

class App {
  constructor() {
    this.userModel = User;
  }

  /**
   * Check if a user exists in the database.
   * @param {String} email The user's email address.
   * @returns {Object} user The user's record info.
   */

  async UserExists(email) {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  /**
   *
   * @param {String} firstname The user's first name.
   * @param {String} lastname The user's last name.
   * @param {String} email The user's email.
   * @param {String} country The user's country.
   * @returns {Object} newUser The newly created user.
   */
  async CreateUser(firstname, lastname, email, country) {
    const newUser = await this.userModel.create({
      name: firstname + " " + lastname,
      email,
      country,
    });

    return newUser;
  }

  /**
   *
   * @param {String} email The user's email address.
   * @returns {Object} user The user's record info.
   */
  async GetUser(email) {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  /**
   *
   * @returns {Array} users All user's record info.
   */
  async GetUsers() {
    const users = await this.userModel.find();
    return users;
  }

  /**
   *
   * @param {String} firstname The user's first name.
   * @param {String} lastname The user's last name.
   * @param {String} email The user's email address.
   * @param {String} country The user's countr.
   * @returns {Object} user The user's updated record info.
   */
  async UpdateUser(firstname, lastname, email, country) {
    const userFullName = firstname + " " + lastname;

    const user = await this.userModel.findOneAndUpdate(
      { email },
      { name: userFullName, country },
      { upsert: true }
    );

    return user;
  }

  /**
   *
   * @param {String} email The user's email address.
   */
  async DeleteUser(email) {
    const user = await this.userModel.findOneAndDelete({ email });
    return user;
  }
}

module.exports = App;
