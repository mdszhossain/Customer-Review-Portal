const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/customerReviewPortal");
    console.log("Database Connected");
  } catch (err) {
    console.log("Error Appeared during DB Connection");
  }
};
module.exports = { connectDB };
