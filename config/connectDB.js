const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://radhi:radhi123@cluster0.x9vyxf9.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("db is connected");
  } catch (error) {
    console.log("db not connected");
  }
};

module.exports = connectDB;
