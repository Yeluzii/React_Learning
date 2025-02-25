import { useState, useEffect } from "react";

const BookDetail = ({ book, onUpdate }) => {
  if (!book) return null;

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [year, setYear] = useState(book.year);
  const [cover, setCover] = useState(book.cover);

  useEffect(() => {
    setTitle(book.title);
    setAuthor(book.author);
    setYear(book.year);
    setCover(book.cover);
    setEditing(false);
  }, [book]);

  const handleSave = () => {
    onUpdate({ ...book, title, author, year, cover });
    setEditing(false);
  };

  return (
    <div className="book-detail">
      {editing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input value={author} onChange={(e) => setAuthor(e.target.value)} />
          <input value={year} onChange={(e) => setYear(e.target.value)} />
          <input value={cover} onChange={(e) => setCover(e.target.value)} />
          <button onClick={handleSave}>保存</button>
          <button onClick={() => setEditing(false)}>取消</button>
        </>
      ) : (
        <>
          <h3>详情</h3>
          <p>
            {cover ? (
              <img className="cover-detail" src={cover} alt="封面图" />
            ) : (
              <span>暂无封面</span>
            )}
          </p>

          <p>书名：{title}</p>
          <p>作者：{author}</p>
          <p>出版年份：{year}</p>
          <button onClick={() => setEditing(true)}>编辑</button>
        </>
      )}
    </div>
  );
};

export default BookDetail;
