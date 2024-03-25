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
