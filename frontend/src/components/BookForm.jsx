import { useState } from "react";

const BookForm = ({ handleAdd }) => {
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

  const addNewBook = async (event) => {
    event.preventDefault();
    await handleAdd({
      title: bookName,
      author: bookAuthor,
      year: bookYear,
      isbn: bookIsbn,
    });
    setBookName("");
    setBookAuthor("");
    setBookYear("");
    setBookIsbn("");
  };

  return (
    <form onSubmit={addNewBook}>
      <div>
        Title: <input value={bookName} onChange={handleBookName} />
      </div>
      <div>
        Author: <input value={bookAuthor} onChange={handleBookAuthor} />
      </div>
      <div>
        Year: <input value={bookYear} onChange={handleBookYear} />
      </div>
      <div>
        ISBN: <input value={bookIsbn} onChange={handleBookIsbn} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default BookForm;
