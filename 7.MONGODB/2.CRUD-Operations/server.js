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

const Client = new MongoClient(
  "mongodb+srv://thakormanthan849:HOQnOxugSZFFXWMG@myfirstmongodb.jm4tch7.mongodb.net/Student-database",
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
    await Client.connect();
    console.log("MongoDB Connected Successfully");

    //!------------
    //? 1. Database name (school)
    //!------------

    const database = Client.db("Student-database");

    //!------------
    //? 2. Collections (Student)
    //!------------

    const Student = database.collection("student");

    //! =====================================
    //? =======CRUD OPERATIONS =========
    //? ======= Write Operation =========
    //! =====================================

    //!------------
    //? 4. Document() using the InsertOne
    //!------------

    // const result = await Student.insertOne({
    //   name: "Manthan",
    //   age: 21,
    //   subjects: ["Math", "Science"],
    // });
    // console.log(result);
    // console.log("Document inserted successfully");

    //!------------
    //? 5. Document() using the InsertMany
    //!------------

    // const results = await Student.insertMany([
    //   {
    //     name: "Devil",
    //     age: 22,
    //     pass: false,
    //     subjects: ["English", "History"],
    //   },
    //   {
    //     name: "DRONE",
    //     age: 20,
    //     pass: true,
    //     subjects: ["Math", "Science"],
    //   },
    // ]);
    // console.log(results);
    // console.log("Many Documents inserted successfully");

    //! =====================================
    //? =======CRUD OPERATIONS =========
    //? ======= Read Operation =========
    //! =====================================

    //!------------
    //? 6. FindMany() using the find()
    //!------------

    const resultsCursor = Student.find();
    const results1 = await resultsCursor.toArray();
    console.log(results1);

    //?--OR--

    // const results1111 = Student.find({ age: { $gt: 20 } });
    // const results111111 = await results1111.toArray();
    // console.log(results111111);

    //!------------
    //? 7. FindOne() using the findOne()
    //!------------

    // const result3 = await Student.findOne({ name: "Manthan" });
    // console.log(result3);

    //! =====================================
    //? =======CRUD OPERATIONS =========
    //? ======= Update Operation =========
    //! =====================================

    //!------------
    //? 8. UpdateOne() using the updateOne()
    //!------------

    // const up1 = await Student.updateOne(
    //   {
    //     name: "Jack", // filtering
    //   },
    //   {
    //     $set: { name: "Jack GOD", age: 11 }, // updating
    //   }
    // );

    // console.log(up1);

    //!------------
    //? 9. UpdateMany() using the updateMany()
    //!------------

    // const up2 = await Student.updateMany(
    //   {
    //     pass: false, // filtering
    //   },
    //   {
    //     $set: { pass: true }, // updating
    //   }
    // );
    // console.log(up2);

    //!====================================
    //? =======CRUD OPERATIONS =========
    //? ======= Delete Operation =========
    //! =====================================

    //!------------
    //? 9. DeleteOne() using the deleteOne()
    //!------------
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
