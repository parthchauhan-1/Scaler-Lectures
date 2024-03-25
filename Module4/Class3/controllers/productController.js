const fs = require("fs");

const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
// console.log(products);
const products = data.products;

const getProducts = (req, res) => {
  res.send(products);
};

const getProduct = (req, res) => {
  const id = req.params.id;
  const product = products.find((obj) => obj.id == id);
  res.send(product);
};

const addProduct = (req, res) => {
  // console.log(req.body);
  products.push(req.body);
  res.send("Item added!");
};

const replaceProduct = (req, res) => {
  const id = req.params.id;
  const index = products.findIndex((obj) => obj.id == id);
  // products[index] = req.body;
  products.splice(index, 1, req.body);
  res.send(`Item at index ${index} replaced using PUT method`);
};

const updateProduct = (req, res) => {
  const id = req.params.id;
  const index = products.findIndex((obj) => obj.id == id);
  const product = products.at(index);
  products.splice(index, 1, { ...product, ...req.body });
  res.send(`Item at index ${index} updated using PATCH method`);
};

const deleteProduct = (req, res) => {
  const id = req.params.id;
  const index = products.findIndex((obj) => obj.id == id);
  const title = products.at(index).title;
  products.splice(index, 1);
  res.send(`Item with ID: ${id}, ${title} has been removed!!!`);
};

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
};
