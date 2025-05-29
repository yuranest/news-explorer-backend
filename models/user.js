const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: (url) => validator.isURL(url),
      message: "You must enter a valid URL",
    },
  },
});

module.exports = mongoose.model("User", userSchema);
