//! =================================
//? === IMPORTS Required modules ===
//! =================================

const express = require("express");

const userRouter = require("./routes/usersRouter");

const postRouter = require("./routes/postsRouter");

//! =================================
//? === INSTANCE ===
//! =================================

const app = express();

//! create PORT

const PORT = process.env.PORT || 8082;

// Home Route

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the main app",
  });
});

// User Route

app.use("/users", userRouter);

// Post Route

app.use("/posts", postRouter);

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

//? === END ===
