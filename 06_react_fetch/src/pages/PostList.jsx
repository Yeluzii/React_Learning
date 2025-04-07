import React, { useState, useEffect } from "react";
import { getPosts, deletePost, updatePost } from "../api/posts";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  const handleDelete = async (postId) => {
    if (window.confirm("确定要删除这篇帖子吗？")) {
      try {
        await deletePost(postId);
        setPosts(posts.filter((post) => post.id !== postId));
      } catch (err) {
        setError("删除失败: " + err.message);
      }
    }
  };
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>加载中...</div>;
  if (error) return <div>错误：{error}</div>;

  return (
    <div className="post-container">
      <h2>帖子列表</h2>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <div className="post-content">
              {editingId === post.id ? (
                <div className="post-edit-form">
                  <input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="post-edit-input"
                  />
                  <textarea
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                    className="post-edit-textarea"
                  />
                </div>
              ) : (
                <Link to={`/posts/${post.id}`} className="post-link">
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-body">{post.body}</p>
                </Link>
              )}
              <div className="post-actions">
                <button
                  onClick={() => {
                    if (editingId === post.id) {
                      setEditingId(null);
                    } else {
                      setEditingId(post.id);
                      setEditTitle(post.title);
                      setEditBody(post.body);
                    }
                  }}
                  className="edit-button"
                >
                  {editingId === post.id ? "取消" : "编辑"}
                </button>
                {editingId === post.id && (
                  <button
                    onClick={async () => {
                      try {
                        await updatePost(post.id, {
                          title: editTitle,
                          body: editBody,
                        });
                        setPosts(
                          posts.map((p) =>
                            p.id === post.id
                              ? { ...p, title: editTitle, body: editBody }
                              : p
                          )
                        );
                        setEditingId(null);
                      } catch (err) {
                        setError("保存失败: " + err.message);
                      }
                    }}
                    className="save-button"
                  >
                    保存
                  </button>
                )}
                <button
                  onClick={() => handleDelete(post.id)}
                  className="delete-button"
                >
                  删除
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
