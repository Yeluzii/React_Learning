import { Card as AntdCard, Avatar } from "antd";
import Column from "antd/es/table/Column";

const Card = ({ cover, avatar, title, content }) => {
  return (
    <AntdCard
      hoverable
      cover={
        <img
          alt="封面"
          src={cover}
          style={{ height: 200, objectFit: "cover" }}
        />
      }
      style={{ width: "30%", margin: "20px" }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <Avatar src={avatar} size={40} />
        <h3 style={{ marginLeft: 12, marginBottom: 0 }}>{title}</h3>
      </div>
      <p style={{ color: "#666" }}>{content}</p>
    </AntdCard>
  );
};

export default Card;
