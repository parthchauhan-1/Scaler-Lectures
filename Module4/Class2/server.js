const express = require("express");

const app = express();

app.post("/", (req, res) => {
  res.send({ type: "POST" });
});

app.get("/", (req, res) => {
  res.send({ type: "GET" });
});

app.put("/", (req, res) => {
  res.send({ type: "PUT" });
});
app.delete("/", (req, res) => {
  res.send({ type: "DELETE" });
});

app.listen(8080, () => {
  console.log("server running at port 8080");
});
