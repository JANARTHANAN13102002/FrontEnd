//server.js
const express = require("express");
const app = express();
const PORT = 3000;
const students = [
  {
    name: "Aman Shrey",
    email: "aman@gmail.com",
    enrolledCourse: "Python",
  },
  {
    name: "Shreya Gupta",
    email: "shreya@example.com",
    enrolledCourse: "Web Development",
  },
  {
    name: "Rahul Mishra",
    email: "rahul@example.com",
    enrolledCourse: "DSA in Java",
  },
];


app.set("view engine", "ejs");

app.get("/api", (req, res) => {
  res.render("students", { students });
  console.log(students);
});

app.listen(PORT, () => {
  console.log("App Started on App:" + PORT);
});
