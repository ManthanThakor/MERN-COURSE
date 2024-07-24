//! =================================
//? === IMPORTS Required modules ===
//! =================================

const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");

//! =================================
//? === INSTANCE ===
//! =================================

const app = express();

//! create PORT

const PORT = process.env.PORT || 5000;

//? =================================
//? =================================

//! Connect to MongoDB

// 1. Create The Client

const Client = new MongoClient("YOUR MONGODB URL", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// 2. Function to connect

const connectDB = async () => {
  try {
    await Client.connect();
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error(error);
  }
};

// 3. Call the function

connectDB();

//? =================================
//? =================================

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
