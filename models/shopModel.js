const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema({
  shopname: { type: String, required: true },
  shoplocation: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Shop = mongoose.model("Shop", shopSchema);
module.exports = Shop;