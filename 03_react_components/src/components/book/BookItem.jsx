const BookItem = ({ book, onClick, onDelete }) => {
  return (
    <div className="book-item" onClick={onClick}>
      {book.cover ? (
        <img className="cover-list" src={book.cover} alt="封面图" />
      ) : (
        <p>暂无封面</p>
      )}

      <br />
      <span>{book.title} -- </span>
      <span>{book.author}</span>
      <button onClick={onDelete}>删除</button>
    </div>
  );
};

export default BookItem;
