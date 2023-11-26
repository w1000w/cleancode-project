import { useState, useEffect } from "react";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import bookService from "./services/books";

function App() {
  const [books, setBooks] = useState([]);

  const handleAdd = async ({ author, title, year, isbn }) => {
    if (!author || !title || !year) {
      /* ISBN is not checked as older books don't have ISBN numbers */
      console.error("Error adding book: One or more fields are empty");
      return;
    }

    const newBook = {
      title,
      author,
      year,
      isbn,
    };

    try {
      const returnedBook = await bookService.addBook(newBook);
      setBooks([...books, returnedBook]);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await bookService.deleteBook(id);
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleUpdate = async (bookToUpdate) => {
    if (!bookToUpdate.title || !bookToUpdate.author || !bookToUpdate.year) {
      /* ISBN is not checked as older books don't have ISBN numbers */
      console.error("Error updating book: One or more fields are empty");
      return;
    }
    try {
      const updatedBook = await bookService.updateBook(
        bookToUpdate.id,
        bookToUpdate
      );
      setBooks(
        books.map((book) =>
          book.id === updatedBook.id ? { ...updatedBook } : book
        )
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

  useEffect(() => {
    console.log(books);
  }, [books]);

  return (
    <>
      <h1>Books</h1>
      <h2>Add a book</h2>
      <BookForm handleAdd={handleAdd} />
      <BookList
        books={books}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </>
  );
}

export default App;
