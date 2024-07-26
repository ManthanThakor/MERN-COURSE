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

const Client = new MongoClient("YOUR MONGO DB KEY Student-database", {
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
    //     pass: true,
    //     grade: "A",
    //     subjects: ["English", "History"],
    //   },
    //   {
    //     name: "Thomas",
    //     age: 20,
    //     pass: false,
    //     grade: "B",
    //     subjects: ["Math", "Physics"],
    //   },
    //   {
    //     name: "Alice",
    //     age: 20,
    //     pass: true,
    //     grade: "A",
    //     subjects: ["Math", "Physics"],
    //   },
    //   {
    //     name: "Bob",
    //     age: 21,
    //     pass: true,
    //     grade: "C",
    //     subjects: ["Math", "Physics"],
    //   },
    //   {
    //     name: "Charlie",
    //     age: 20,
    //     pass: true,
    //     grade: "B",
    //     subjects: ["Science", "English"],
    //   },
    //   {
    //     name: "David",
    //     age: 21,
    //     pass: true,
    //     grade: "B",
    //     subjects: ["Math", "Physics"],
    //   },
    //   {
    //     name: "Eve",
    //     age: 22,
    //     pass: false,
    //     grade: "D",
    //     subjects: ["Math", "Physics"],
    //   },
    //   {
    //     name: "Frank",
    //     age: 20,
    //     pass: true,
    //     grade: "C",
    //     subjects: ["Math", "Physics"],
    //   },
    //   {
    //     name: "Grace",
    //     age: 22,
    //     pass: false,
    //     grade: "D",
    //     subjects: ["Math", "Physics"],
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

    //!------------
    //? 10. FindOneAndUpdate() using the findOneAndUpdate()
    //!------------

    // const up3 = await Student.findOneAndUpdate(
    //   {
    //     name: "Jack GOD", // filtering
    //   },
    //   {
    //     $set: { age: 30 },
    //   }
    // );
    // console.log(up3);

    //! =====================================
    //? =======CRUD OPERATIONS =========
    //? ======= Delete Operation =========
    //! =====================================

    //!------------
    //? 11. DeleteOne() using the deleteOne()
    //!------------

    // const del1 = await Student.deleteOne({
    //   name: "Manthan", // filtering
    // });
    // console.log(del1);

    //!------------
    //? 12. DeleteMany() using the deleteMany()
    //!------------

    const del2 = await Student.deleteMany({ grade: "C" });
    console.log(del2);

    //!------------
    //? 14. FindOneAndDelete() using the findOneAndDelete()
    //!------------

    const del3 = await Student.findOneAndDelete({
      name: "Alice", // filtering
    });
    console.log(del3);

    //! ====

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
