const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const { authJwtAccess } = require("../middleware/authMiddleware");

router.get("/", bookController.getAllBooks);

router.post("/", bookController.addBook);

router.delete("/:id", bookController.deleteBook);

router.put("/:id", bookController.updateBook);

router.get("/owned", authJwtAccess, bookController.getBooksOwnedByUser);

module.exports = router;
