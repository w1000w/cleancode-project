import Book from "./Book";

import { useState } from "react";

const BookList = ({ books, handleDelete, handleUpdate }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h2>Filter by Title</h2>
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <hr />
      {filteredBooks.length === 0 ? (
        <p>No books found</p>
      ) : (
        filteredBooks.map((book) => (
          <div key={book.id}>
            <Book
              {...book}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          </div>
        ))
      )}
    </>
  );
};

export default BookList;
