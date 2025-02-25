import { useState } from "react";

const BookInput = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: Date.now(), title, author, year, cover });
    setTitle("");
    setAuthor("");
    setYear("");
    setCover("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="书名"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="作者"
        required
      />
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="出版年份"
        required
      />
      <input
        type="text"
        value={cover}
        onChange={(e) => setCover(e.target.value)}
        placeholder="封面URL"
      />
      <button type="submit">添加</button>
    </form>
  );
};

export default BookInput;
