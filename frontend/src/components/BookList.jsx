import Book from "./Book";

export const BookList = ({ books }) => {
  return (
    <>
      {books.map((book) => (
        <Book key={book.isbn} {...book} />
      ))}
    </>
  );
};
