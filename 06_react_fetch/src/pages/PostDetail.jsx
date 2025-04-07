import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/posts/${id}`);
        setPost(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div>加载中...</div>;
  if (error) return <div>错误：{error}</div>;
  if (!post) return <div>帖子不存在</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-500 hover:text-blue-700"
        >
          返回
        </button>
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <div className="w-20" />
      </div>
      <p className="mb-8 text-gray-700">{post.body}</p>
      <Link
        to="/"
        className="text-blue-500 hover:text-blue-700 hover:underline"
      >
        返回文章列表
      </Link>
    </div>
  );
};

export default PostDetail;
