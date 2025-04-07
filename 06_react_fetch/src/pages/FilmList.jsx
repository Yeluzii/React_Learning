import React, { useState, useEffect } from "react";
import { getFilms } from "../api/films";

const FilmList = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setLoading(true);
        const response = await getFilms();
        if (response.code === 200) {
          setFilms(response.result.newslist);
          setTotalItems(response.result.allnum);
          setTotalPages(Math.ceil(response.result.allnum / itemsPerPage));
        } else {
          setError(response.msg);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  // 计算当前页显示的电影
  const currentFilms = films.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <div>加载中...</div>;
  if (error) return <div>错误：{error}</div>;

  return (
    <div className="film-container">
      <div className="film-grid">
        {currentFilms.map((film) => (
          <div key={film.id} className="film-card">
            <div className="film-image-container">
              <img src={film.picUrl} alt={film.title} className="film-image" />
            </div>
            <div className="film-content">
              <h3 className="film-title">{film.title}</h3>
              <p className="film-info">发布时间：{film.ctime}</p>
              <p className="film-info">来源：{film.source}</p>
              <p className="film-description">{film.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          上一页
        </button>
        <span className="pagination-info">
          第 {currentPage} 页 / 共 {totalPages} 页 (共{totalItems}条)
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          下一页
        </button>
      </div>
    </div>
  );
};

export default FilmList;
