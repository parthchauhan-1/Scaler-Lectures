const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const Theatre = require("../models/theatreModel");

//add a theatre
router.post("/add-theatre", authMiddleware, async (req, res) => {
  try {
    const newTheatre = new Theatre(req.body);
    newTheatre.save();
  } catch (error) {
    res.send({ success: true, message: error.message });
  }
});

router.get("/hi", async (req, res) => {
  res.send({ message: "Hi" });
});

module.exports = router;
