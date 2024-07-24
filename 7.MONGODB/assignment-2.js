const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const PORT = 5000;

app.use(express.json());

// MongoDB connection URI
const uri = "mongodb+srv://Link";

// Create a new MongoClient
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Connect to MongoDB
const connectDB = async () => {
  try {
    await client.connect();
    console.log("MongoDB connected successfully...");

    // Database and collection references
    const database = client.db("crudDatabase");
    const collection = database.collection("items");

    // Routes for CRUD operations

    // Create
    app.post("/items", async (req, res) => {
      try {
        const newItem = req.body;
        const result = await collection.insertOne(newItem);
        res.status(201).json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Read all
    app.get("/items", async (req, res) => {
      try {
        const items = await collection.find({}).toArray();
        res.status(200).json(items);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Read one
    app.get("/items/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const item = await collection.findOne({
          _id: new MongoClient.ObjectId(id),
        });
        if (item) {
          res.status(200).json(item);
        } else {
          res.status(404).json({ message: "Item not found" });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Update
    app.put("/items/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const updatedItem = req.body;
        const result = await collection.updateOne(
          { _id: new MongoClient.ObjectId(id) },
          { $set: updatedItem }
        );
        if (result.modifiedCount === 1) {
          res.status(200).json({ message: "Item updated successfully" });
        } else {
          res.status(404).json({ message: "Item not found" });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Delete
    app.delete("/items/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const result = await collection.deleteOne({
          _id: new MongoClient.ObjectId(id),
        });
        if (result.deletedCount === 1) {
          res.status(200).json({ message: "Item deleted successfully" });
        } else {
          res.status(404).json({ message: "Item not found" });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  } catch (error) {
    console.error(error);
  }
};

connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
