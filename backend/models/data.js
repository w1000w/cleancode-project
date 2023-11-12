const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    isbn: "978-3-16-148410-0",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    isbn: "978-3-16-148410-1",
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    isbn: "978-3-16-148410-2",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    isbn: "978-3-16-148410-3",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    isbn: "978-3-16-148410-4",
  },
];

function addBook(book) {
  books.push(book);
}

function removeBook(isbn) {
  const index = books.findIndex((book) => book.isbn === isbn);
  if (index !== -1) {
    books.splice(index, 1);
  }
}

function getAllBooks() {
  return books;
}

module.exports = {
  addBook,
  removeBook,
  getAllBooks,
};

module.exports = books;
