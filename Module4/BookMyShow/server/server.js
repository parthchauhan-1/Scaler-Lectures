const express = require("express");

const PORT = 8080;

const app = express();

require("dotenv").config();
const dbConfig = require("./config/dbConfig");

app.get("/", (req, res) => {
  res.send("Hi");
});
app.listen(PORT, () => console.log(`server running at ${PORT}`));
