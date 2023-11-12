import { BookList } from "./components/BookList";
import dummyBooks from "../data";

function App() {
  return (
    <>
      <BookList books={dummyBooks} />
    </>
  );
}

export default App;
