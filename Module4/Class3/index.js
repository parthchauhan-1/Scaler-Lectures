const mongoose = require("mongoose");

const password = "A6Aex93vp9fTfOuj";

const db = `mongodb+srv://parthchauhan1:${password}@cluster0.izal3k6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(db)
  .then(() => {
    console.log("Connection Established!");
  })
  .catch((error) => {
    console.log(error);
  });

// Schema or Blueprint of table to be made
const courseSchema = mongoose.Schema({
  name: String,
  creator: String,
  rating: Number,
  isPublished: Boolean,
  publishedData: { type: Date, default: Date.now },
});

// Model or Create Table
const Course = mongoose.model("Course", courseSchema);

//CRUD
//Create
async function createCourse() {
  const course = new Course({
    name: "Java",
    creator: "Parth",
    rating: 4,
    isPublished: true,
  });
  const courseCreated = await course.save();
  console.log(courseCreated);
}
// createCourse();

//Read
async function getCourse() {
  // const allCourses = await Course.find({});
  // console.log(allCourses);
  const course = await Course.find({ creator: "Parth" });
  console.log(course);
}
getCourse();
