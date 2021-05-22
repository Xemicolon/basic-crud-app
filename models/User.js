const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Your first and last name are required"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/,
      "Please enter a valid email address",
    ],
  },
  country: {
    type: String,
  },
});

module.exports = model("User", UserSchema);
