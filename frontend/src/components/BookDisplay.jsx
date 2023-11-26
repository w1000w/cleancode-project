const BookDisplay = ({
  id,
  title,
  author,
  year,
  isbn,
  handleDelete,
  handleEditing,
}) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{year}</p>
      <p>{isbn}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <button onClick={handleEditing}>Edit</button>
    </div>
  );
};
export default BookDisplay;
