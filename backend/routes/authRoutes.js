const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { authJwtAccess } = require("../middleware/authMiddleware");

router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/check", authJwtAccess, (req, res) => {
  res.status(200).json({ message: "Access granted" });
});

module.exports = router;
