const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  size: { type: String, required: true },
  condition: { type: String, required: true },
  tags: { type: [String], default: [] },
  availability: {
    type: String,
    enum: ["Available", "Not Available"],
    required: true
  },
  option: {
    type: String,
    enum: ["Swap", "Redeem with Points"],
    required: true
  },
  imageUrls: { type: [String], required: true }, // Array of uploaded image paths/URLs
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);
