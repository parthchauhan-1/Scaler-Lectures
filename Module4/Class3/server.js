const express = require("express");
const productRouter = require("./routers/productRouter");

const app = express();
const PORT = 8080;

app.use(express.json()); // parses incoming requests with JSON payloads.)

app.use("/products", productRouter.router);

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
