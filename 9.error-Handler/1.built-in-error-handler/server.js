const express = require("express");
const app = express();

// Example route that triggers an error
app.get("/", (req, res, next) => {
  const err = new Error("Something went wrong");
  next(err);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
