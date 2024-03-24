const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hi");
});

const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
// console.log(products);
const products = data.products;

app.get("/products", (req, res) => {
  res.send(products);
});

//CREATE
app.use(express.json());
app.post("/products", (req, res) => {
  // console.log(req.body);
  products.push(req.body);
  res.send("Item added!");
});

//READ->>GET
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((obj) => obj.id == id);
  res.send(product);
});

//DELETE
app.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  const index = products.findIndex((obj) => obj.id == id);
  const title = products.at(index).title;
  products.splice(index, 1);
  res.send(`Item with ID: ${id}, ${title} has been removed!!!`);
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
