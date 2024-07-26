//! =================================
//? === IMPORTS Required modules ===
//! =================================

const express = require("express");
const mongoose = require("mongoose");

//! =================================
//? === INSTANCE ===
//! =================================

const app = express();

//! create PORT

const PORT = process.env.PORT || 5000;

const Url = "YOUR MONGO DB KEY Data-Modelling-embedded-doc";

// Connect to MongoDB

const connectToDB = async () => {
  try {
    await mongoose.connect(Url, {
      autoIndex: true, // Ensure indexes are built
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};

connectToDB();

//! Address Schema

const addressSchema = new mongoose.Schema(
  {
    street: String,
    city: String,
    state: String,
    zipCode: String,
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

//! User Schema

const userSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    address: addressSchema, // Embedded document
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

//! Compile the user Schema

const User = mongoose.model("User", userSchema);

//! Create a user

const createUser = async () => {
  try {
    const newUser = await User.create({
      name: "John Doe",
      age: 30,
      address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
      },
    });
    console.log("User created:", newUser);
  } catch (error) {
    console.error("Error creating user:", error.message);
  }
};

createUser();

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
