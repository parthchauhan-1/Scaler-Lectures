const express = require("express");

const router = express.Router();
const productController = require("../controllers/productController");

router
  .get("/", productController.getProducts)

  //CREATE

  .post("/", productController.addProduct)

  //READ->>GET
  .get("/:id", productController.getProduct)

  //UPDATE USING PUT(USED FOR MAJOR CHANGES LIKE REPLACING THE ENTIRE OBJECT)
  .put("/:id", productController.replaceProduct)

  //UPDATE USING PATCH(USED FOR MINOR CHANGES LIKE REPLACING A PART OF AN OBJECT)
  .patch("/:id", productController.updateProduct)

  //DELETE
  .delete("/:id", productController.deleteProduct);

exports.router = router;
