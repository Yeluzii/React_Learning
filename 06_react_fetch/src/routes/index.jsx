import React from "react";
import { Routes, Route } from "react-router-dom";
import PostList from "../pages/PostList";
import PostDetail from "../pages/PostDetail";
import CreatePost from "../pages/CreatePost";
import FilmList from "../pages/FilmList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/films" element={<FilmList />} />
      <Route path="/" element={<PostList />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/posts/:id" element={<PostDetail />} />
    </Routes>
  );
};

export default AppRoutes;
