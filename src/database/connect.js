const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.oefyncw.mongodb.net/?appName=cursonodejs`;

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Connected to MongoDB");
    return mongoose.connection;
  } catch (err) {
    console.error("MongoDB connection error:", err.message || err);
    throw err;
  }
}

async function disconnectDatabase() {
  try {
    await mongoose.disconnect();
    console.log("Database disconnected");
  } catch (err) {
    console.error("Error disconnecting from MongoDB:", err.message || err);
  }
}

module.exports = { connectToDatabase, disconnectDatabase };
