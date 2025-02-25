import "./style.css";

const Card = ({ titleSlot, contentSlot, buttonSlot }) => {
  return (
    <div className="card">
      <div className="main">
        <div className="header">{titleSlot}</div>
        <div className="body">{contentSlot}</div>
        <div className="footer">{buttonSlot}</div>
      </div>
    </div>
  );
};

export default Card;
