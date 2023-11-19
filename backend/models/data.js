const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    isbn: "9783161484100",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    isbn: "9783161484101",
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    isbn: "9783161484102",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    isbn: "9783161484103",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    isbn: "9783161484104",
  },
];

function addBook(newBook) {
  newBook.isbn = removeIsbnHyphens(book.isbn);

  const existingBook = books.find((book) => book.isbn === newBook.isbn);
  if (existingBook) {
    throw new Error("ISBN already exists");
  }

  books.push(newBook);
}

function removeBook(isbn) {
  isbn = removeIsbnHyphens(isbn);
  const index = books.findIndex((book) => book.isbn === isbn);
  if (index === -1) {
    throw new Error("Book not found");
  }
  books.splice(index, 1);
}

function getAllBooks() {
  return books;
}

module.exports = {
  addBook,
  removeBook,
  getAllBooks,
};

function removeIsbnHyphens(isbn) {
  return isbn.replace(/-/g, "");
}
