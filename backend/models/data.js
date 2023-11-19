const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    isbn: "9783161484100",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    isbn: "9783161484101",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    isbn: "9783161484102",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    isbn: "9783161484103",
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    isbn: "9783161484104",
  },
];

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

module.exports = {
  addBook,
  deleteBook,
  getAllBooks,
  updateBook,
};

function removeIsbnHyphens(isbn) {
  return isbn.replace(/-/g, "");
}
