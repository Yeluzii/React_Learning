import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const user = useContext(UserContext);
  if (!user) {
    return <div>请先登录</div>;
  }
  return <div>当前登录：{user.username}</div>;
};

export default Header;
