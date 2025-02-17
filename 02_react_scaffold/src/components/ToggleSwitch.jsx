import { useState } from "react";

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const containerStyle = {
    padding: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const switchStyle = {
    position: "relative",
    width: 60,
    height: 34,
    borderRadius: 34,
    background: isOn ? "#ffc400" : "#ccc",
    cursor: "pointer",
    transition: "background 0.4s",
  };

  const knobStyle = {
    position: "absolute",
    top: 4,
    left: isOn ? 30 : 4,
    height: 26,
    width: 26,
    background: "white",
    borderRadius: "50%",
    transition: "left 0.4s",
  };

  const textStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: 12,
    color: isOn ? "black" : "gray",
    pointerEvents: "none",
  };

  return (
    <div style={containerStyle}>
      <label style={switchStyle}>
        <input
          type="checkbox"
          hidden
          checked={isOn}
          onChange={() => setIsOn(!isOn)}
        />
        <span style={knobStyle} />
        <span style={textStyle}>{isOn ? "ON" : "OFF"}</span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
