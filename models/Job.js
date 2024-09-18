const mongoose = require("mongoose");

const jobsSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    requirements: { type: String, required: true },
    companyName: { type: String, required: true },
    companyEmail: { type: String, required: true, index: true, unique: true },
    employerId: { type: String, required: true, unique: true },
    appliedBy: { type: [String], required: true, unique: true },
    tags: { type: [String], required: true, index: true, unique: true },
  },
  { timestamps: true }
);

const Jobs = mongoose.model("Jobs", jobsSchema);

module.exports = Jobs;
