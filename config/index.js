/**
 * @type {Object}
 * Environment configuration variables
 */
const config = {
  // PORT
  port: parseInt(process.env.PORT, 10),
  // DATABASE URL
  databaseURL:
    process.env.NODE_ENV === "production"
      ? process.env.MONGO_URL
      : process.env.MONGO_URI,
};

module.exports = config;
