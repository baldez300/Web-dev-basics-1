
const mongoose = require("mongoose");
require('dotenv').config(); // Load environment variables from .env

const MONGO_URI = process.env.MONGO_URI; // Access the database URI from .env

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB is connected!");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
  
};

module.exports = connectDB;
