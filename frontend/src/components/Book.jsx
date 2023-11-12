const Book = ({ title, author, year, isbn, handleDelete }) => {
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
      <button onClick={() => handleDelete(isbn)}>Delete</button>
    </div>
  );
};

export default Book;
