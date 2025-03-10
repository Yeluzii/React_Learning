import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Profile from "../pages/dashboard/Profile";
import Setting from "../pages/dashboard/Setting";
import Dashboard from "../pages/dashboard/Dashboard";
import Fans from "../pages/dashboard/profile/Fans";
import Follow from "../pages/dashboard/profile/Follow";
import Login from "../pages/Login";
import Book from "../pages/Book";

import BlogDetails from "../components/BlogDetails";
import Layout from "../components/Layout";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/book/:bookId" element={<Book />} />
          <Route path="/blog/:blogIndex" element={<BlogDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Profile />} />
          </Route>
          <Route path="profile" element={<Profile />}>
            <Route index element={<Fans />} />
            <Route path="fans" element={<Fans />} />
            <Route path="follow" element={<Follow />} />
          </Route>
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
