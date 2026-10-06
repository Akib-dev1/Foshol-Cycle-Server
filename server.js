const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = 3000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@data-cluster.2d1meym.mongodb.net/?appName=Data-Cluster`;
const client = new MongoClient(uri);
// Middleware
app.use(cors());
app.use(express.json());

async function connectToMongoDB() {
  try {
    await client.connect();

    console.log("You successfully connected to MongoDB!");
  } catch (err) {
    console.dir(err);
  }
}

connectToMongoDB();

// Test route
app.get("/", (req, res) => {
  res.send("ফসল-Cycle Server is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
