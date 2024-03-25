const express = require("express");
const productController = require("./controllers/productController");

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/products", productController.getProducts);

//CREATE
app.use(express.json()); // parses incoming requests with JSON payloads.
app.post("/products", productController.addProduct);

//READ->>GET
app.get("/products/:id", productController.getProduct);

//UPDATE USING PUT(USED FOR MAJOR CHANGES LIKE REPLACING THE ENTIRE OBJECT)
app.put("/products/:id", productController.replaceProduct);

//UPDATE USING PATCH(USED FOR MINOR CHANGES LIKE REPLACING A PART OF AN OBJECT)
app.patch("/products/:id", productController.updateProduct);

//DELETE
app.delete("/products/:id", productController.deleteProduct);

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
