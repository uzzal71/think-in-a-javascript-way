const express = require("express");

const app = express();

app.get("/text", (req, res, next) => {
  req.message = "hello world";
  next(); // Call next without passing any argument
});

app.listen(2000, () => {
  console.log("Server is running on port 2000");
});
