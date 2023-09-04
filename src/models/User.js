const mongoose = require("../database/Index");

const UserSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
    unique: true,
    select: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
