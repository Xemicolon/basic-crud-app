const { Router } = require("express");
const route = Router();
const {
  addUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../../controllers/user");

/**
 * @route  POST /create/user
 * @desc Create new users route
 * @access Public
 */
route.post("/create/user", addUser);

/**
 * @route  GET /user
 * @desc Find a user
 * @access Public
 */
route.get("/user", getUser);

/**
 * @route GET /users
 * @desc Get list of all created users
 * @access Public
 */
route.get("/users", getUsers);

/**
 * @route PATCH /update/user
 * @desc Update a user
 * @access Public
 */
route.patch("/update/user", updateUser);

/**
 * @route DELETE /delete/user
 * @desc Delete a user
 * @access Public
 */
route.delete("/delete/user", deleteUser);

module.exports = route;
