import React from "react";

const information = {
  username: "张三",
  score: 666,
  email: "123@123.com",
  cover:
    "https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/b40a5ed9-9726-46f8-a74d-89e8aba48d68_da2d9eae49872968ecae3f715ca2e52.jpg",
};

const element = (
  <div
    style={{
      justifyItems: "center",
      borderRadius: "10px",
      boxShadow: "5px 5px 10px #c5c5c5",
      margin: "auto",
      width: "30%",
      padding: "10px",
    }}
  >
    <h2>我的信息</h2>
    <div>
      <img
        style={{ borderRadius: "50%", width: "100px" }}
        src={information.cover}
      />
      <h3>{information.username}</h3>
      <h3>积分：{information.score}</h3>
      <h3>邮箱：{information.email}</h3>
    </div>
  </div>
);

class Card extends React.Component {
  render() {
    return element;
  }
}

export default Card;
