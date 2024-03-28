const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/about", function (req, res) {
  res.send("about page");
});

app.listen(2000, () => {
  console.log("Server is running on port 2000");
});
