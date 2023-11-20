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

  const handleDelete = async (id) => {
    try {
      await bookService.deleteBook(id);
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleAdd = async (event) => {
    event.preventDefault();
    if (!bookName || !bookAuthor || !bookYear) {
      /* ISBN is not checked as older books don't have ISBN numbers */
      console.error("Error adding book: One or more fields are empty");
      return;
    }

    const newBook = {
      title: bookName,
      author: bookAuthor,
      year: bookYear,
      isbn: bookIsbn,
    };

    try {
      const returnedBook = await bookService.addBook(newBook);
      setBooks([...books, returnedBook]);
      setBookName("");
      setBookAuthor("");
      setBookYear("");
      setBookIsbn("");
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const handleUpdate = async (updatedBook) => {
    if (!updatedBook.title || !updatedBook.author || !updatedBook.year) {
      /* ISBN is not checked as older books don't have ISBN numbers */
      console.error("Error updating book: One or more fields are empty");
      return;
    }

    try {
      const returnedBook = await bookService.updateBook(
        updatedBook.id,
        updatedBook
      );
      setBooks(
        books.map((book) => (book.id !== returnedBook.id ? book : returnedBook))
      );
    } catch (error) {
      console.error("Error updating book:", error);
    }
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
      <BookList
        books={books}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </>
  );
}

export default App;
