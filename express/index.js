const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/about", function (req, res) {
  res.send("about page");
});

app.get("/contact", function (req, res) {
  res.send("contact page");
});

app.get("/blog", function (req, res) {
  res.send("blog page");
});

app.get("/portfolio", function (req, res) {
  res.send("portfolio page");
});

app.get("/resume", function (req, res) {
  res.send("resume page");
});

app.listen(2000, () => {
  console.log("Server is running on port 2000");
});
