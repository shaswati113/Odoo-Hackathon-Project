const router = require("express").Router();
const Clothes = require("../models/Clothes");

// POST /api/clothes/add → Add new item
router.post("/add", async (req, res) => {
  try {
    const newItem = new Clothes(req.body);
    const saved = await newItem.save();
    res.status(200).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Failed to upload item" });
  }
});

// GET /api/clothes → Get all items
router.get("/", async (req, res) => {
  try {
    const clothes = await Clothes.find();
    res.status(200).json(clothes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch items" });
  }
});

// Optional: GET by category (e.g. Saree)
router.get("/category/:cat", async (req, res) => {
  try {
    const filtered = await Clothes.find({ category: req.params.cat });
    res.status(200).json(filtered);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch items" });
  }
});

module.exports = router;
