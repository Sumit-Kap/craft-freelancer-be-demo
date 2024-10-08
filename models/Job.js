const mongoose = require("mongoose");

const jobsSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    requirements: { type: String, required: true },
    companyName: { type: String, required: true },
    companyEmail: { type: String, required: true, index: true },
    employerId: { type: String, required: true, index: true },
    salary: { type: Number, required: true },
    appliedBy: { type: [String] },
    skills: { type: [String], required: true },
  },
  { timestamps: true }
);

const Jobs = mongoose.model("Jobs", jobsSchema);

module.exports = Jobs;
