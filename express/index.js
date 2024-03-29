const express = require("express");

const app = express();

app.get("/", (req, res) => {});

app.listen(2000, () => {
  console.log("Server is running on port 2000");
});
