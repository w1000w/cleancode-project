const books = require("../models/data");

const getAllBooks = (req, res) => {
  const allBooks = books.getAllBooks();
  res.status(200).json(allBooks);
};

const addBook = (req, res) => {
  const book = req.body;
  books.addBook(book);
  res.status(201).json(book);
};

const removeBook = (req, res) => {
  const isbn = req.params.isbn;
  books.removeBook(isbn);
  res.status(204).send();
};

module.exports = {
  getAllBooks,
  addBook,
  removeBook,
};
