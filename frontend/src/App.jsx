import { useState, useEffect } from "react";
import { BookList } from "./components/BookList";
import bookService from "./services/books";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    bookService.getAll().then((initialBooks) => {
      setBooks(initialBooks);
    });
  }, []);

  return (
    <>
      <BookList books={books} />
    </>
  );
}

export default App;
