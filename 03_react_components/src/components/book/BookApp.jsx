import { useState } from "react";
import BookInput from "./BookInput";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import "./style.css";

const BookApp = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div>
      <h1>图书管理系统</h1>
      <BookInput onAdd={(newBook) => setBooks([...books, newBook])} />
      <BookList
        books={books}
        onSelect={(book) => setSelectedBook(book)}
        onDelete={(id) => setBooks(books.filter((book) => book.id !== id))}
      />
      <BookDetail
        book={selectedBook}
        onUpdate={(updatedBook) => {
          setBooks(
            books.map((b) => (b.id === updatedBook.id ? updatedBook : b))
          );
        }}
      />
    </div>
  );
};

export default BookApp;
