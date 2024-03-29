const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("/test", (req, res) => {
  res.send("Test Page");
});

app.get("/test2", (req, res) => {
  res.send("Test Page 2");
});

app.listen(2000, () => {
  console.log("Server is running on port 2000");
});
