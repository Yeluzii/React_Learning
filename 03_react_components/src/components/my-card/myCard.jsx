import "./myCardStyle.css";

const MyCard = ({ titleSlot, bodySlot, footerSlot }) => {
  return (
    <div className="card2">
      <div className="main2">
        <div className="header2">{titleSlot}</div>
        <div className="body2">{bodySlot}</div>
        <div className="footer2">{footerSlot}</div>
      </div>
    </div>
  );
};

export default MyCard;
