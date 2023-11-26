import { useState } from "react";
import BookDisplay from "./BookDisplay";
import BookEdit from "./BookEdit";

const Book = ({
  id,
  title,
  author,
  year,
  isbn,
  handleDelete,
  handleUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditing = () => {
    setIsEditing(!isEditing);
  };

  return isEditing ? (
    <BookEdit
      id={id}
      title={title}
      author={author}
      year={year}
      isbn={isbn}
      handleEditing={handleEditing}
      handleUpdate={handleUpdate}
    />
  ) : (
    <BookDisplay
      id={id}
      title={title}
      author={author}
      year={year}
      isbn={isbn}
      handleEditing={handleEditing}
      handleDelete={handleDelete}
    />
  );
};

export default Book;
