const users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const newUser = req.body;
    if (!newUser.username || !newUser.password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(newUser.password, salt);
    newUser.password = hashedPassword;
    users.addUser(newUser);
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(409).json({ error });
  }
};

module.exports = { register };
