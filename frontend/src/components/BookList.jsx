import Book from "./Book";

export const BookList = ({ books, handleDelete }) => {
  return (
    <>
      {books.map((book) => (
        <div key={book.isbn}>
          <Book {...book} handleDelete={handleDelete} />
        </div>
      ))}
    </>
  );
};
