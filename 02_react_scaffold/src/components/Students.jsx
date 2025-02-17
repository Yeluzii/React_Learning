import React from "react";

const students = [
  { id: 111, name: "张三", score: 99 },
  { id: 112, name: "李四", score: 98 },
  { id: 113, name: "王五", score: 91 },
  { id: 114, name: "赵六", score: 88 },
];

const element = (
  <div style={{ textAlign: "center", border: "1px black solid" }}>
    <h2>学生列表数据</h2>
    <div>
      {students
        .filter((item) => item.score > 90)
        .map((item) => {
          return (
            <div key={item.id} style={{ border: "1px black solid" }}>
              <h2>学号： {item.id}</h2>
              <h3>姓名：{item.name}</h3>
              <h1>分数：{item.score}</h1>
            </div>
          );
        })}
    </div>
  </div>
);

class Students extends React.Component {
  render() {
    return element;
  }
}

export default Students;
