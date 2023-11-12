const BookForm = ({
  handleAdd,
  handleBookName,
  handleBookAuthor,
  handleBookYear,
  handleBookIsbn,
  bookName,
  bookAuthor,
  bookYear,
  bookIsbn,
}) => {
  return (
    <form onSubmit={handleAdd}>
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
