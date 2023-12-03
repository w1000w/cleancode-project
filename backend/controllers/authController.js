require("dotenv").config();
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

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = users.findUser(username);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const access_token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.status(200).json({ message: "Login successful", access_token });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { register, login };
