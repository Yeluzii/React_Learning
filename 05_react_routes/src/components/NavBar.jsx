import React from "react";
import { useState, useEffect } from "react";
import { Button } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import "../pages/nav.css";

const NavBar = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleStorageChange = () => {
      // 强制组件重新渲染
      setUser(JSON.parse(localStorage.getItem("user")));
    };

    window.addEventListener("userStatusChanged", handleStorageChange);
    return () =>
      window.removeEventListener("userStatusChanged", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      {location.pathname !== "/login" && (
        <nav>
          <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink activeClassName="active" to="/about?name=zhangsan&age=20">
            About
          </NavLink>
          <NavLink activeClassName="active" to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink activeClassName="active" to="/book/123">
            Book
          </NavLink>
          {user && (
            <div style={{ display: "flex" }}>
              <div style={{ border: "1px black dashed", borderRadius: "5px" }}>
                <img
                  src={user.avatar}
                  alt="头像"
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                />
                <span
                  style={{
                    color: "blue",
                  }}
                >
                  {user.username}
                </span>
              </div>
              <Button
                type="primary"
                onClick={handleLogout}
                style={{ color: "white", marginLeft: "10px" }}
              >
                退出
              </Button>
            </div>
          )}
        </nav>
      )}
    </>
  );
};

export default NavBar;
