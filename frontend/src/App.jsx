import { useState, useEffect } from "react";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import bookService from "./services/books";

function App() {
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookYear, setBookYear] = useState("");
  const [bookIsbn, setBookIsbn] = useState("");

  const handleBookName = (event) => {
    setBookName(event.target.value);
  };

  const handleBookAuthor = (event) => {
    setBookAuthor(event.target.value);
  };

  const handleBookYear = (event) => {
    setBookYear(event.target.value);
  };

  const handleBookIsbn = (event) => {
    setBookIsbn(event.target.value);
  };

  const handleDelete = (isbn) => {
    bookService.deleteBook(isbn).then(() => {
      setBooks(books.filter((book) => book.isbn !== isbn));
    });
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const newBook = {
      title: bookName,
      author: bookAuthor,
      year: bookYear,
      isbn: bookIsbn,
    };
    bookService.addBook(newBook).then((returnedBook) => {
      setBooks([...books, returnedBook]);
    });
  };

  useEffect(() => {
    bookService.getAll().then((initialBooks) => {
      setBooks(initialBooks);
    });
  }, []);

  return (
    <>
      <h1>Books</h1>
      <h2>Add a book</h2>
      <BookForm
        handleAdd={handleAdd}
        handleBookName={handleBookName}
        handleBookAuthor={handleBookAuthor}
        handleBookYear={handleBookYear}
        handleBookIsbn={handleBookIsbn}
        bookName={bookName}
        bookAuthor={bookAuthor}
        bookYear={bookYear}
        bookIsbn={bookIsbn}
      />
      <BookList books={books} handleDelete={handleDelete} />
    </>
  );
}

export default App;
