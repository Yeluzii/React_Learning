import { useState, useEffect } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    // 定义时间格式化函数
    const formatTime = (date) => {
      return date.toLocaleTimeString("zh-CN", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    };

    // 设置初始时间
    setTime(formatTime(new Date()));

    // 定时器
    setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);
  }, []);

  return (
    <div style={{ justifyItems: "center" }}>
      <h2 style={{ background: "#ffc400" }}>{time}</h2>
    </div>
  );
};

export default CurrentTime;
