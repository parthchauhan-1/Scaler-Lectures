const express = require("express");
// exectution of middlewares depend on the sequence they're written
// For eg. in below code, logger middleware will exeute first
// and then dummy authorization middleware

const app = express();
// logger middleware
app.use("/", (req, res, next) => {
  //application level middleware
  console.log(req.method, req.ip, req.hostname, new Date());
  console.log(req.query);
  next();
});

// dummy authentication middleware
const auth = (req, res, next) => {
  console.log(req.query);
  if (req.query.password === "123") {
    next();
  } else {
    res.send("You're not authorized to view this route");
  }
};

// app.use(auth); //app.use invokes middlware for all routes in the app.

app.use(express.static("public")); // built-in function in express

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/", auth, (req, res) => {
  //route level middleware
  res.send({ type: "POST" });
});

app.get("/users/:username", (req, res) => {
  res.send({ type: "GET" });
  console.log(req.params);
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
