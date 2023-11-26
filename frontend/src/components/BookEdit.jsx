import { useState } from "react";

const BookEdit = ({
  id,
  title,
  author,
  year,
  isbn,
  handleEditing,
  handleUpdate,
}) => {
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedAuthor, setUpdatedAuthor] = useState(author);
  const [updatedYear, setUpdatedYear] = useState(year);
  const [updatedIsbn, setUpdatedIsbn] = useState(isbn);

  const updateBook = async (event) => {
    event.preventDefault();
    const updatedBook = {
      id,
      title: updatedTitle,
      author: updatedAuthor,
      year: updatedYear,
      isbn: updatedIsbn,
    };
    await handleUpdate(updatedBook);
    setUpdatedTitle("");
    setUpdatedAuthor("");
    setUpdatedYear("");
    setUpdatedIsbn("");
    handleEditing();
  };

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <input
        type="text"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <input
        type="text"
        value={updatedAuthor}
        onChange={(e) => setUpdatedAuthor(e.target.value)}
      />
      <input
        type="text"
        value={updatedYear}
        onChange={(e) => setUpdatedYear(e.target.value)}
      />
      <input
        type="text"
        value={updatedIsbn}
        onChange={(e) => setUpdatedIsbn(e.target.value)}
      />
      <button onClick={updateBook}>Save</button>
      <button onClick={handleEditing}>Cancel</button>
    </div>
  );
};

export default BookEdit;
