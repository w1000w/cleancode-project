const books = require("../models/bookModel");

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

const deleteBook = (req, res) => {
  try {
    const id = req.params.id;
    books.deleteBook(id);
    res.status(200).send();
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateBook = (req, res) => {
  try {
    const id = req.params.id;
    const book = req.body;
    const updatedBook = books.updateBook(id, book);
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getBooksOwnedByUser = (req, res) => {
  try {
    const userId = req.user.id;
    const booksOwnedByUser = books.getBooksOwnedBy(userId);
    res.status(200).json(booksOwnedByUser);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAllBooks,
  addBook,
  deleteBook,
  updateBook,
  getBooksOwnedByUser,
};
