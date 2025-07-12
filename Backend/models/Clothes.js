const mongoose = require("mongoose");

const ClothesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },  // e.g. "Shawl", "Saree"
  size: { type: String },
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Clothes", ClothesSchema);
