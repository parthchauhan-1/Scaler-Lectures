const cors = require("cors");
const express = require("express");

const PORT = 8080;

const app = express();

require("dotenv").config();
const dbConfig = require("./config/dbConfig");

const userRoute = require("./routes/userRoute");
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);

// app.get("/", (req, res) => {
//   res.send("Hi");
// });
app.listen(PORT, () => console.log(`server running at ${PORT}`));
