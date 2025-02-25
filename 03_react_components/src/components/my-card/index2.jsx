import "./style.css";

const Card2 = ({ children }) => {
  return (
    <div className="card">
      <div className="main">
        <div className="header">{children[0]}</div>
        <div className="body">{children[1]}</div>
        <div className="footer">{children[2]}</div>
      </div>
    </div>
  );
};

export default Card2;
