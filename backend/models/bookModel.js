const books = require("../data/dummyBookData");

let nextBookId = books.length + 1;

function addBook(newBook) {
  const existingBook = books.find((book) => book.isbn === newBook.isbn);
  if (existingBook) {
    throw new Error("ISBN already exists");
  }
  newBook.id = nextBookId++;
  newBook.isbn = removeIsbnHyphens(newBook.isbn);
  books.push(newBook);
}

function deleteBook(id) {
  const index = books.findIndex((book) => book.id == id);
  if (index === -1) {
    throw new Error("Book not found");
  }
  books.splice(index, 1);
}

function getAllBooks() {
  return books;
}

function updateBook(id, newBook) {
  const index = books.findIndex((book) => book.id == id);
  if (index === -1) {
    throw new Error("Book not found");
  }
  books[index] = { ...books[index], ...newBook };
  return books[index];
}

function getBooksOwnedBy(userId) {
  const booksOwnedByUser = books
    .filter((book) => book.ownedByUser.includes(userId))
    .map(({ ownedByUser, ...rest }) => rest);
  return booksOwnedByUser;
}

module.exports = {
  addBook,
  deleteBook,
  getAllBooks,
  updateBook,
  getBooksOwnedBy,
};

function removeIsbnHyphens(isbn) {
  return isbn.replace(/-/g, "");
}
