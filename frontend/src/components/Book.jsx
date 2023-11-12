const Book = ({ title, author, year, isbn }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <h3>{year}</h3>
      <h4>{isbn}</h4>
    </div>
  );
};

export default Book;
