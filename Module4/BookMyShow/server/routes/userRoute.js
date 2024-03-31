const bcrypt = require("bcrypt");
const router = require("express").Router();
const User = require("../models/userModel");

router.post("/api/users/register", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.send({
        success: false,
        message: "User already exists",
      });
    }

    //Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    const newUser = await User(req.body);
    // console.log(newUser);
    newUser.save();
    res.send({
      success: true,
      message: "User registered successfully, please proceed with login!",
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/api/users/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const inputPassword = req.body.password;
      const dbStoredPassword = user.password;
      const validPassword = await bcrypt.compare(
        inputPassword,
        dbStoredPassword
      );
      console.log(validPassword);
      if (!validPassword) {
        return res.send({
          success: false,
          message: "Incorrect Password! 😥",
        });
      }

      res.send({
        success: true,
        message: "Logged in successfully 🤗",
      });
    } else {
      res.send({
        success: false,
        message: "User does not exist!!!",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
