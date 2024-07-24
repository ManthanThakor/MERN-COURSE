const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();

const PORT = 5000;

// Connect to MongoDB
const client = new MongoClient(
  "mongodb+srv://riyadv2688:Xvs9KwhK4kcTDREi@mongo.edmaarn.mongodb.net/rawdatabase",
  {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  }
);

// Function to Connect
const connectDB = async () => {
  try {
    await client.connect();
    console.log("MongoDB connected Successfully...");

    // Database Name
    const database = client.db("rawDatabase");

    // Collection
    const rawEl = database.collection("raw");

    // Documents
    //* Insert Data
    const insertData = await rawEl.insertMany([
      {
        name: "abc",
        gender: "F",
      },
      {
        name: "xyz",
        gender: "M",
      },
    ]);
    console.log(insertData);
  } catch (error) {
    console.log(error);
  }
};

// Call the Function
connectDB();

// Start the server
app.listen(PORT, console.log(`Server is Running on ${PORT}`));
