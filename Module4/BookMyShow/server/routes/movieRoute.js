const router = require("express").Router();
const Movie = require("../models/movieModel");

//add new movie
router.post("/add-movie", async (req, res) => {
  try {
    const newMovie = await Movie(req.body);
    // console.log(newMovie);
    await newMovie.save();
    res.send({
      success: true,
      message: "movie added successfully!",
    });
  } catch (error) {
    console.log(error.message);
  }
});

//delete a movie
router.delete("/delete-movie", async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.body.movieId);
    res.send({ success: true, message: "movie deleted successfully" });
  } catch (error) {
    console.log(error.message);
  }
});

//get all the movies
router.get("/get-all-movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.send({
      success: true,
      message: "All Movie Fetched",
      data: movies,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

//update movie
router.put("/update-movie", async (req, res) => {
  try {
    await Movie.findByIdAndUpdate(req.body.movieId, req.body);
    res.send({ success: true, message: "movie updated successfully" });
  } catch (error) {
    res.send({
      success: false,
      error,
    });
  }
});

module.exports = router;
