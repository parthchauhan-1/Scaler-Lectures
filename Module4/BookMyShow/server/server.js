const cors = require("cors");
const express = require("express");

const PORT = 8080;

const app = express();

require("dotenv").config();
const dbConfig = require("./config/dbConfig");

const userRoute = require("./routes/userRoute");
const movieRoute = require("./routes/movieRoute");
const theatreRoute = require("./routes/theatreRoute");

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/theatres", theatreRoute);

// app.get("/", (req, res) => {
//   res.send("Hi");
// });
app.listen(PORT, () => console.log(`server running at ${PORT}`));
