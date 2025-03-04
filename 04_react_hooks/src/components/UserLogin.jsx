import UserProfile from "./UserProfile";
import { UserContext } from "../context/UserContext";
import { useState } from "react";
import Header from "./Header";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleLogin = () => {
    setUser({ username: username });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <>
      <UserContext.Provider value={user}>
        <Header />
        {user && <button onClick={handleLogout}>登出</button>}
      </UserContext.Provider>
      <div>
        <input
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="请输入用户名"
        />
        <input type="password" placeholder="请输入密码" />
        <button onClick={handleLogin}>登录</button>
      </div>
      <UserContext.Provider value={user}>
        <UserProfile />
      </UserContext.Provider>
    </>
  );
};

export default UserLogin;
