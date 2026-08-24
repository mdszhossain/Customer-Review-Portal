const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  star: { type: Number, required: true },
  message: { type: String, required: true },
  customerName: { type: String, required: true },
  phone: { type: String, required: true },
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;