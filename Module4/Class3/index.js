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

// Schema
const courseSchema = mongoose.Schema({
  name: String,
  creator: String,
  rating: Number,
  isPublished: Boolean,
  publishedData: { type: Date, default: Date.now },
});

// Model
const Course = mongoose.model("Course", courseSchema);

//CRUD
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
createCourse();
