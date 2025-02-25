// RegistPage.jsx
import RegistForm from "./RegistForm";
import { useState } from "react";

const RegistPage = () => {
  const [user, setUser] = useState({ phone: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false); // 新增提交状态

  const handleFormSubmit = (userData) => {
    setUser(userData);
    setIsSubmitted(true); // 提交时更新状态
  };

  return (
    <>
      <RegistForm onSubmit={handleFormSubmit} />
      {isSubmitted && ( // 条件渲染
        <div>
          <h2>电话：{user.phone}</h2>
          <h2>邮箱：{user.email}</h2>
        </div>
      )}
    </>
  );
};

export default RegistPage;
