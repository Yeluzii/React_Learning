// RegistForm.jsx
import { useState } from "react";

const RegistForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止默认表单提交行为
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        电话：
        <input
          type="text"
          value={formData.phone}
          onChange={handleChange("phone")}
          placeholder="请输入电话..."
        />
      </div>
      <div>
        邮箱：
        <input
          type="text"
          value={formData.email}
          onChange={handleChange("email")}
          placeholder="请输入邮箱..."
        />
      </div>
      <button type="submit">注册</button>
    </form>
  );
};

export default RegistForm;
