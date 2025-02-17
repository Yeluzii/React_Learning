import { useState } from "react";

const colors = [
  "ff0000",
  "#ff7f00",
  "#ffff00",
  "#00ff00",
  "0000ff",
  "#4B0082",
  "#8f00ff",
];

const RainbowText = () => {
  const [clickCount, setClickCount] = useState(0);

  const getCurrentColor = () => {
    return colors[clickCount % colors.length];
  };

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
        border: "1px black solid",
      }}
    >
      <h2 style={{ color: getCurrentColor() }}>你已经点击了 {clickCount} 次</h2>
      <button onClick={handleClick}>点我变彩虹色 🌈</button>
      {clickCount > 10 && <p>你已触发隐藏成就：彩虹大师！</p>}
    </div>
  );
};

export default RainbowText;
