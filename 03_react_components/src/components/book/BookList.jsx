import BookItem from "./BookItem";

const BookList = ({ books, onSelect, onDelete }) => {
  return (
    <div className="book-list">
      <h2>图书列表</h2>
      <hr />
      {books.length === 0 && <p>暂无图书，请添加！</p>}
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onClick={() => onSelect(book)}
          onDelete={() => onDelete(book.id)}
        />
      ))}
    </div>
  );
};

export default BookList;
