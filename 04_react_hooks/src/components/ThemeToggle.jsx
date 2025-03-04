import { useState } from "react";

const ThemeToggle = () => {
  // 使用 useState 来存储当前的主题状态
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((mode) => !mode);
  };
  return (
    <div
      style={{
        height: "100vh",
        background: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <h2>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam dicta
        autem quae voluptatem veritatis animi fugiat id, quo minus modi impedit
        quia? Mollitia ratione, repellat deleniti voluptatibus ipsa magni optio.
      </h2>
      <button onClick={toggleTheme}>
        切换到 {isDarkMode ? "白天" : "暗黑"} 模式
      </button>
    </div>
  );
};

export default ThemeToggle;
