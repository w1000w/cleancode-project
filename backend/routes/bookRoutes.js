const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.get("/", bookController.getAllBooks);

router.post("/", bookController.addBook);

router.delete("/:isbn", bookController.removeBook);

module.exports = router;
