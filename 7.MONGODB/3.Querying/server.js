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

//! Connect to MongoDB

// 1. Create The client

const client = new MongoClient(
  "mongodb+srv://thakormanthan849:HOQnOxugSZFFXWMG@myfirstmongodb.jm4tch7.mongodb.net/MyFirstMongodb",
  {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  }
);

// 2. Function to connect

const connectDB = async () => {
  try {
    await client.connect();
    console.log("MongoDB connected successfully...");

    const database = client.db("MyFirstMongodb");

    //! collections

    const employees = database.collection("employees");

    //! create

    // const employeesDocs = [
    //   { name: "Alice", age: 25, department: "HR" },
    //   { name: "Bob", age: 26, department: "HR" },
    //   { name: "Charlie", age: 27, department: "Finance" },
    //   { name: "David", age: 28, department: "Finance" },
    //   { name: "Eva", age: 29, department: "IT" },
    //   { name: "Frank", age: 30, department: "IT" },
    // ];

    // const em1 = await employees.insertMany(employeesDocs);
    // console.log(em1);

    //! ==============================
    //? === Querying Operators ===
    //! ==============================

    // ! ------------ $gt ------------

    const result = await employees.find({ age: { $gt: 25 } }).toArray();
    console.log(result);

    //! ------------ $lt ------------
    // const result = await employees.find({ age: { $lt: 26 } }).toArray();
    // console.log(result);

    //! ------------ $eq ------------
    // const result = await employees.find({ department: "Finance" }).toArray();
    // console.log(result);

    //! ------------ $in ------------
    // const result = await employees.find({ department: { $in: ["Finance", "IT"] } }).toArray();
    // console.log(result);

    //! ------------ $and ------------
    // const result = await employees
    //  .find({ age: { $gt: 25 }, department: "Finance" })
    //  .toArray();
    // console.log(result);

    //! ------------ $or ------------
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};

//! call the function

connectDB();

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
