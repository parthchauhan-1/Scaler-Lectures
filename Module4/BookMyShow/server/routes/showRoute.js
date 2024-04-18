const Shows = require("../models/showModel");
const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");

//add a Show
router.post("/add-show", authMiddleware, async (req, res) => {
  try {
    const newShow = new Shows(req.body);
    await newShow.save();
    res.send({
      success: true,
      message: "Show Added",
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

//get-all-shows-by-theatre
router.post("/get-all-shows-by-theatre", authMiddleware, async (req, res) => {
  try {
    const shows = await Shows.find({ theatre: req.body.theatre_id }).populate(
      "movie"
    );
    res.send({
      success: true,
      message: "Shows fetched!",
      data: shows,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

//delete a show
router.post("/delete-show", authMiddleware, async (req, res) => {
  try {
    const shows = await Shows.findByIdAndDelete(req.body.showId);
    res.send({
      success: true,
      message: "Show deleted!",
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
