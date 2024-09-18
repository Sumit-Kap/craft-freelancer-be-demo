require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConfig = require("./dbConfig");
const app = express();
app.use(cors());
app.use(express.json());
dbConfig.connect();
const Jobs = require("./models/Job");
const Users = require("./models/User");
app.get("/api/v1/health", (req, res) => {
  res.send("<h1>Server up and running</h1>");
});

app.post("/api/v1/createJobs", (req, res) => {
  const {
    jobTitle,
    jobDescription,
    jobRequirements,
    tags,
    companyName,
    companyEmail,
    salary,
    id,
  } = req.body;

  const jobs = new Jobs({
    title: jobTitle,
    requirements: jobRequirements,
    description: jobDescription,
    appliedBy: [],
    skills: tags,
    salary: salary,
    companyName: companyName,
    companyEmail: companyEmail,
    employerId: id,
  });

  jobs
    .save()
    .then((response) => {
      res
        .status(200)
        .json({ code: "ok", message: "record saved successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ code: "Error", message: err });
    });
});

app.get("/api/v1/fetchJobs/:id", async (req, res) => {
  const { id } = req.params;
  console.log("print", req.params);
  try {
    const response = await Jobs.find({ employerId: id });
    res.status(200).json({ status: "ok", data: response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ code: "Error", message: err });
  }
});

app.post("/api/v1/createUser", async (req, res) => {
  const { bio, contactNumber, skills, salary, email, gitHubProfile } = req.body;
  const user = new Users({
    bio: bio,
    contactNumber: contactNumber,
    salary: salary,
    email: email,
    skills: skills.split(","),
    githubProfile: gitHubProfile,
  });

  user
    .save()
    .then((response) => {
      res
        .status(200)
        .json({ code: "ok", message: "record saved successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ code: "Error", message: err });
    });
});

app.get("/api/v1/fetchUser/:id", async (req, res) => {
  const { id } = req.params;
  console.log("print", req.params);
  try {
    const response = await Jobs.find({ email: id });
    res.status(200).json({ status: "ok", data: response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ code: "Error", message: err });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`listening to PORT:${process.env.PORT}`);
});
