import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
  const user = useContext(UserContext);
  if (!user) {
    return <></>;
  }
  return (
    <div>
      <h2>欢迎你，{user.username}</h2>
    </div>
  );
};

export default UserProfile;
