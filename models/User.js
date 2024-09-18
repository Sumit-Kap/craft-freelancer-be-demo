const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: { type: String, required: true, index: true, unique: true },
    role: { type: String, required: true },
    userId: { type: String, required: true, index: true, unique: true },
    tags: { type: [String], required: true },
    githubUserName: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
