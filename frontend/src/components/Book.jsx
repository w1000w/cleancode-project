import { useState } from "react";

const Book = ({
  title,
  author,
  year,
  isbn,
  id,
  handleDelete,
  handleUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedAuthor, setUpdatedAuthor] = useState(author);
  const [updatedYear, setUpdatedYear] = useState(year);
  const [updatedIsbn, setUpdatedIsbn] = useState(isbn);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedTitle(title);
    setUpdatedAuthor(author);
    setUpdatedYear(year);
    setUpdatedIsbn(isbn);
  };

  const updateBook = async () => {
    const updatedBook = {
      id: id,
      title: updatedTitle,
      author: updatedAuthor,
      year: updatedYear,
      isbn: updatedIsbn,
    };

    try {
      await handleUpdate(updatedBook);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      {isEditing ? (
        <>
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
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{title}</h3>
          <p>{author}</p>
          <p>{year}</p>
          <p>{isbn}</p>
          <button onClick={() => handleDelete(id)}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Book;
