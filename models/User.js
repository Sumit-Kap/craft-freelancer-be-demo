const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    bio: { type: String, required: true },
    contactNumber: { type: String, required: true },
    skills: { type: [String], required: true },
    githubProfile: { type: String, required: true },
    salary: { type: Number, required: true },
    email: { type: String, required: true, index: true, unique: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
