const express = require("express");

const app = express();

const middleware1 = (req, res, next) => {
  let index = 0;
  req.index = index;
  next();
};

const middleware2 = (req, res, next) => {
  req.index = req.index + 1;
  next();
};

const middleware3 = (req, res, next) => {
  res.send("index=" + req.index);
};

const middleware4 = (req, res, next) => {
  req.message = req.message + " world";
};

app.use(middleware1, middleware2, middleware3);
app.use((req, res) => res.send(req.message));

app.get("/text", (req, res, next) => {
  req.message = "hello world";
  next(); // Call next without passing any argument
});

app.listen(2000, () => {
  console.log("Server is running on port 2000");
});