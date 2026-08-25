const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema({
  shopName: { type: String, required: true },
  shopLocation: { type: String, required: true },
  userId: { type: mongoose.Schema.types.ObjectId, ref: "User" },
});

const Shop = mongoose.model("Shop", shopSchema);
module.exports = Shop;