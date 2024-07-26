//! =================================
//? === IMPORTS Required modules ===
//! =================================

const express = require("express");
const { FindOperators } = require("mongodb");
const mongoose = require("mongoose");

//! =================================
//? === INSTANCE ===
//! =================================

const app = express();

//! create PORT

const PORT = process.env.PORT || 5000;

const Url = "YOUR MONGO DB KEY MyFirstMongodb";

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

//! Design Schema

const userProfileSchema = new mongoose.Schema({
  username: String, // string
  age: Number, // number
  birthday: Date, // Date
  isActive: Boolean, // Boolean
  email: String, // string
  hobbies: [String], // array of strings
  objectID: mongoose.Schema.Types.ObjectId, // ObjectId
  address: {
    street: String,
    city: String,
    postalCode: Number,
  }, // embedded document
  customdata: mongoose.Schema.Types.Mixed, // mixed type
});

//! COMPILE THE SCHEMA TO FROM THE MODEL

const UserProfile = mongoose.model("UserProfile", userProfileSchema);

//! =================================
//? ========= CRUD OPERATION ========
//! =================================

//! ---------------------------------
//? ---------- Create DOC -----------
//! ---------------------------------

//? 1) --- .save() ---

// const user = new UserProfile({
//   username: "Thakor Manthan",
//   age: 30,
//   birthday: new Date("1990-07-15"),
//   isActive: true,
//   email: "thakormanthan@gmail.com",
//   hobbies: ["Reading", "Gaming", "Coding"],
//   address: {
//     street: "123 Main St",
//     city: "xsarwe",
//     postalCode: 10001,
//   },
// });

// //! SAVE THE DOCUMENT

// user
//   .save()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//? 2) --- .create() --- (Example usage)

// UserProfile.create({
//   username: "John Doe",
//   age: 25,
//   birthday: new Date("1995-07-15"),
//   isActive: false,
//   email: "john.doe@example.com",
//   hobbies: ["Hiking", "Cooking"],
//   address: {
//     street: "456 Another St",
//     city: "Sample City",
//     postalCode: 20002,
//   },
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//? 3) --- insertMany() --- (Example usage)

// UserProfile.insertMany([
//   {
//     username: "Alice",
//     age: 28,
//     birthday: new Date("1993-05-21"),
//     isActive: true,
//     email: "alice@example.com",
//     hobbies: ["Swimming", "Reading"],
//     address: {
//       street: "789 Different St",
//       city: "Another City",
//       postalCode: 30003,
//     },
//   },
//   {
//     username: "Bob",
//     age: 32,
//     birthday: new Date("1989-11-12"),
//     isActive: false,
//     email: "bob@example.com",
//     hobbies: ["Running", "Gaming"],
//     address: {
//       street: "101 Different St",
//       city: "Another City",
//       postalCode: 30004,
//     },
//   },
// ])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//! ---------------------------------
//? ---------- Read DOC -----------
//! ---------------------------------

//? 1) --- find() ---

// UserProfile.find()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//? 2) --- findOne() ---

// UserProfile.findOne({ username: "Thakor Manthan" })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//? 3) --- findById() ---

// UserProfile.findById("66a1f1846191a5d8a57fff7e") // Replace with an actual ID from your database
//   .then((data) => {
//     console.log("User Profile by ID: ", data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//? 4) --- where() ---

// UserProfile.where("age")
//   .gte(18)
//   .lte(30)
//   .then((data) => {
//     console.log("Users aged between 18 and 30: ", data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//? 5) --- sort() ---

// UserProfile.find()
//   .sort({ age: -1 }) // Sort by age in descending order
//   .then((data) => {
//     console.log("Users sorted by age in descending order: ", data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//? 6) --- limit() ---

// UserProfile.find()
//   .limit(5) // Limit the result to 5 documents
//   .then((data) => {
//     console.log("First 5 User Profiles: ", data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//? 7) --- combination of sort() and limit() ---

// UserProfile.find()
//   .sort({ age: 1 })
//   .limit(3) // Sort by age in ascending order and limit to 3 documents
//   .then((data) => {
//     console.log("First 3 users sorted by age in ascending order: ", data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//! ---------------------------------
//? ---------- UPDATE DOC -----------
//! ---------------------------------

//? 1) --- updateOne() ---

// UserProfile.updateOne({ username: "Thakor Manthan" }, { $set: { age: 21 } })
//   .then((result) => {
//     console.log("Update result: ", result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//? 2) --- updateMany() ---

// UserProfile.updateMany({ isActive: true }, { $set: { isActive: false } })
//   .then((result) => {
//     console.log("Update result: ", result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//? 3) --- findByIdAndUpdate() ---

// UserProfile.findByIdAndUpdate(
//   "66a1f1846191a5d8a57fff7e",
//   { $set: { "address.city": "New City" } },
//   { new: true }
// )
//   .then((data) => {
//     console.log("Updated document: ", data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//? _________________________________

//!-------- Update Operators --------
//? _________________________________

//! FIELD UPDATE OPERATORS

//? 4) --- $set ---

// UserProfile.updateOne(
//   { _id: "66a1f1846191a5d8a57fff7e" }, // Filter
//   { $set: { "address.city": "Newwww City" } } // Update operation
// )
//   .then((result) => console.log("Update result:", result))
//   .catch((err) => console.error(err));

//? 5) --- $unset --- (Remove field)

// UserProfile.updateOne(
//   { _id: "66a1f1846191a5d8a57fff7e" }, // Filter
//   { $unset: { "address.city": "" } } // Update operation
// )
//   .then((result) => console.log("Update result:", result))

//   .catch((err) => console.error(err));

//? =================================

//! Array Update Operators

//? 6) --- $push --- (Add element to array)

// UserProfile.updateOne(
//   { _id: "66a1f1846191a5d8a57fff7e" }, // Filter
//   { $push: { hobbies: "Fighting" } } // Update operation
// )
//   .then((result) => console.log("Update result:", result))
//   .catch((err) => console.error(err));

//? 7) --- $pull --- (Remove element from array)

// UserProfile.updateOne(
//   { _id: "66a1f1846191a5d8a57fff7e" }, // Filters
//   { $pull: { hobbies: "Reading" } } // Update operation
// )
//   .then((result) => console.log("Update result:", result))
//   .catch((err) => console.error(err));

//? 8) --- $addToSet --- (Add element to array only if it doesn't exist)

// UserProfile.updateOne(
//   { _id: "66a1f1846191a5d8a57fff7e" }, // Filter
//   { $addToSet: { hobbies: "Gardening" } } // Update operation
// )
//   .then((result) => console.log("Update result:", result))
//   .catch((err) => console.error(err));

//? 9) --- $pop --- (Remove element from array at specified index)

// UserProfile.updateOne(
//   { _id: "66a1f1846191a5d8a57fff7e" }, // Filter
//   { $pop: { hobbies: -1 } } // Update operation
// )
//   .then((result) => console.log("Update result:", result))
//   .catch((err) => console.error(err));

//? 10) --- $pullAll --- (Remove all elements from array that match specified values)

// UserProfile.updateOne(
//   { _id: "66a1f1846191a5d8a57fff7e" }, // Filter
//   { $pullAll: { hobbies: ["Reading", "Gardening"] } } // Update operation
// )
//   .then((result) => console.log("Update result:", result))
//   .catch((err) => console.error(err));

//? 11) --- $pushAll --- (Add all elements to array that don't already exist)

// UserProfile.updateOne(
//   { _id: "66a1f1846191a5d8a57fff7e" }, // Filter
//   { $pushAll: { hobbies: ["Cooking", "Painting"] } } // Update operation
// )
//   .then((result) => console.log("Update result:", result))
//   .catch((err) => console.error(err));

//? =================================

//!  Arithmetic Operators

//? 12) --- $inc --- (Increment a field by a specified value)

// UserProfile.updateOne(
//   { _id: "66a1f1846191a5d8a57fff7e" }, // Filter
//   { $inc: { age: 5 } } // Update operation
// )
//   .then((result) => console.log("Update result:", result))
//   .catch((err) => console.error(err));

//? 13) --- $mul --- (Multiply a field by a specified value)

// UserProfile.updateOne(
//   { _id: "66a1f1846191a5d8a57fff7e" }, // Filter
//   { $mul: { age: 2 } } // Update operation
// )
//   .then((result) => console.log("Update result:", result))
//   .catch((err) => console.error(err));

//? 14) --- $rename --- (Rename a field)

// UserProfile.updateOne(
//   { _id: "66a1f1846191a5d8a57fff7e" }, // Filter
//   { $rename: { "address.city": "city" } } // Update operation
// )
//   .then((result) => console.log("Update result:", result))
//   .catch((err) => console.error(err));

//? 16) --- $min --- (Set the value of a field to a specified minimum)

// UserProfile.updateOne(
//   { _id: "66a1f1846191a5d8a57fff7e" }, // Filter
//   { $min: { age: 18 } } // Update operation
// )
//   .then((result) => console.log("Update result:", result))
//   .catch((err) => console.error(err));

//? 17) --- $max --- (Set the value of a field to a specified maximum)

// UserProfile.updateOne(
//   { _id: "66a1f1846191a5d8a57fff7e" }, // Filter
//   { $max: { age: 65 } } // Update operation
// )
//   .then((result) => console.log("Update result:", result))
//   .catch((err) => console.error(err));

//? 18) --- $mod --- (Perform modulo operation on a field)

// UserProfile.updateOne(
//   { _id: "66a1f1846191a5d8a57fff7e" }, // Filter
//   { $mod: { age: 7, remainder: 0 } } // Update operation
// )
//   .then((result) => console.log("Update result:", result))
//   .catch((err) => console.error(err));

//? =================================

//!  Date Operators

//? 15) --- $currentDate --- (Set the value of a field to the current date and time)

// UserProfile.updateOne(
//   { _id: "66a1f1846191a5d8a57fff7e" }, // Filter
//   { $currentDate: { lastUpdated: true } } // Update operation
// )
//   .then((result) => console.log("Update result:", result))
//   .catch((err) => console.error(err));

//? =================================

//!  Extra

//? 19) --- $exists --- (Check if a field exists or not)

// UserProfile.updateOne(
//   { _id: "66a1f1846191a5d8a57fff7e" }, // Filter
//   { $exists: { address: true } } // Update operation
// )
//   .then((result) => console.log("Update result:", result))
//   .catch((err) => console.error(err));

//? 20) --- $type --- (Check if a field has a specific data type)

// UserProfile.updateOne(
//   { _id: "66a1f1846191a5d8a57fff7e" }, // Filter
//   { $type: { age: "number" } } // Update operation
// )
//   .then((result) => console.log("Update result:", result))
//   .catch((err) => console.error(err));

//? 21) --- $regex --- (Match values that match a specified regular expression)

// UserProfile.updateOne(
//   { _id: "66a1f1846191a5d8a57fff7e" }, // Filter
//   { $regex: { name: /^John/ } } // Update operation
// )
//   .then((result) => console.log("Update result:", result))
//   .catch((err) => console.error(err));

//? =================================
//? === end the update operations ===

//! ---------------------------------
//? ---------- DELETE DOC -----------
//! ---------------------------------

//? 1) --- deleteOne --- (Delete a single document)

// const deleteUserProfile = async (userId) => {
//   try {
//     const result = await UserProfile.deleteOne({ _id: userId });
//     console.log("Delete result: ", result);
//   } catch (err) {
//     console.error("Error deleting document: ", err);
//   }
// };

//! Call the function with a specific user ID
deleteUserProfile("66a1f1846191a5d8a57fff7e");

//? 2) --- deleteMany --- (Delete multiple documents)

// const deleteInactiveProfiles = async () => {
//   try {
//     const result = await UserProfile.deleteMany({ isActive: false });
//     console.log("Delete result: ", result);
//   } catch (err) {
//     console.error("Error deleting documents: ", err);
//   }
// };

//! Call the function
// deleteInactiveProfiles();

//? 3) --- findByIdAndDelete --- (Find and delete a document by ID) (MongoDB Driver)

// const deleteProfileById = async (userId) => {
//   try {
//     const data = await UserProfile.findByIdAndDelete(userId);
//     if (data) {
//       console.log("Deleted document: ", data);
//     } else {
//       console.log("No document found with that ID.");
//     }
//   } catch (err) {
//     console.error("Error deleting document: ", err);
//   }
// };

//! Call the function with a specific user ID
// deleteProfileById("66a1f1846191a5d8a57fff7e");

//? ---------------------------------

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//? === END ===
