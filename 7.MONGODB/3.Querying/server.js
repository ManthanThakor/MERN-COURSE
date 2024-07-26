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

const client = new MongoClient("YOUR MONGO DB KEY MyFirstMongodb", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

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
    //   { name: "A", age: 25, department: "HR" },
    //   { name: "B", age: 26, department: "HR" },
    //   { name: "C", age: 27, department: "Finance" },
    //   { name: "D", age: 28, department: "Finance" },
    //   { name: "E", age: 30, department: "IT" },
    //   { name: "F", age: 30, department: "IT" },
    // ];

    // const em1 = await employees.insertMany(employeesDocs);
    // console.log(em1);

    //! ==============================
    //? === Querying Operators ===
    //! ==============================

    // ! ------------ $gt ------------

    // const re1 = await employees.find({ age: { $gt: 25 } }).toArray();
    // console.log(re1);

    // ! ------------ $gte ------------

    // const re2 = await employees.find({ age: { $gte: 25 } }).toArray();
    // console.log(re2);

    // ! ------------ $ne ------------

    // const re3 = await employees.find({ age: { $ne: 25 } }).toArray();
    // console.log(re3);

    //! ------------ $lt ------------
    // const re4 = await employees.find({ age: { $lt: 26 } }).toArray();
    // console.log(re4);

    //! ------------ $lte ------------

    // const re5 = await employees.find({ age: { $lte: 25 } }).toArray();
    // console.log(re5);

    //! ------------ $eq ------------

    // const re6 = await employees.find({ department: "Finance" }).toArray();
    // console.log(re6);

    //! ------------ $in ------------

    // const re7 = await employees.find({ department: { $in: ["Finance", "IT"] } }).toArray();
    // console.log(re7);

    //! ------------ $nin ------------

    // const re8 = await employees
    //   .find({ department: { $nin: ["Finance", "IT"] } })
    //   .toArray();
    // console.log(re8);

    //! ------------ $and ------------

    // const re9 = await employees
    //   .find({ age: { $gt: 25 }, department: "Finance" })
    //   .toArray();
    // console.log(re9);

    //! ------------ $or ------------

    // const re10 = await employees
    //  .find({ $or: [{ age: { $gt: 25 } }, { department: "Finance" }] })
    //  .toArray();
    // console.log(re10);

    //! ------------ $not ------------

    // const re11 = await employees.find({ age: { $not: { $gt: 25 } } }).toArray();
    // console.log(re11);

    //! ------------ $nor ------------

    // const re12 = await employees
    //   .find({ $nor: [{ age: { $gt: 25 }, department: "Finance" }] })
    //   .toArray();
    // console.log(re12);

    //! ----- Multiple condition -----
    //! --(AND = Multiple condition)--

    // const re12 = await employees
    //   .find({ age: { $gt: 25 }, department: "Finance" }, { name: { $ne: "A" } })
    //   .toArray();
    // console.log(re12);

    // //? ---- OR ----

    // const re13 = await employees
    //   .find({
    //     $and: [
    //       { age: { $gt: 25 }, department: "Finance" },
    //       { name: { $ne: "A" } },
    //     ],
    //   })
    //   .toArray();
    // console.log(re13);

    //! ------------ $exists ------------
    // const result = await employees.find({ age: { $exists: true } }).toArray();
    // console.log(result);

    //! ----------------------------------
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
