const books = require("../models/data");

const getAllBooks = (req, res) => {
  try {
    const allBooks = books.getAllBooks();
    res.status(200).json(allBooks);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const addBook = (req, res) => {
  try {
    const book = req.body;
    books.addBook(book);
    res.status(201).json(book);
  } catch (error) {
    res.status(409).json({ error });
  }
};

const removeBook = (req, res) => {
  try {
    const isbn = req.params.isbn;
    books.removeBook(isbn);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateBook = (req, res) => {
  try {
    const isbn = req.params.isbn;
    const book = req.body;
    books.updateBook(isbn, book);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAllBooks,
  addBook,
  removeBook,
};
