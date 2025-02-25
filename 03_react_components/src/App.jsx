import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Layout } from "antd";

import Button from "./components/Button";
import Button1 from "./components/Button1";
import UserPage from "./components/UserPage";
import InputParent from "./components/InputParent";
import RegistPage from "./components/login/RegistPage";
import NavBar from "./components/navbar/NavBar";
import NavBar2 from "./components/navbar/NavBar2";
import Card from "./components/my-card";
import Card2 from "./components/my-card/index2";
import MyCard from "./components/my-card/myCard";
import CounterClass from "./components/CounterClass";
import TaskPage from "./components/TaskPage";
import BookApp from "./components/book/BookApp";

const App = () => {
  const handleClick = () => {
    alert("点击了按钮111");
  };

  return (
    <>
      <BookApp />

      {/* <TaskPage /> */}

      {/* <Layout style={{ minHeight: "100vh" }}>
        <Header />
        <Main />
        <Footer />
      </Layout> */}

      {/* <Button onClick={handleClick} /> */}
      {/* <UserPage /> */}
      {/* <Button1 onClick={handleClick} /> */}
      {/* <InputParent /> */}
      {/* <RegistPage /> */}

      {/* <NavBar>
        <button>按钮</button>
        <h2>哈哈哈</h2>
        <i>斜体文本</i>
      </NavBar>

      <NavBar2
        leftSlot={<button>按钮</button>}
        centerSlot={<h2>hhh</h2>}
        rightSlot={<i>斜体文本222</i>}
      />

      <Card
        titleSlot={
          <>
            <h2>最新消息！！！</h2>
            <hr />
          </>
        }
        contentSlot={
          <>
            <p>重磅推荐，2025蛇年庆典，看看有你的那份吗</p>
            <img src="https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/%E6%B3%95%E5%9B%BD%E9%9C%9E%E6%85%95%E5%B0%BC%E5%9C%B0%E5%8C%BA%E7%9A%84%E6%98%9F%E8%BD%A8%20-%20%E6%90%9C%E7%B4%A2_a3eac28b.jpg" />
          </>
        }
        buttonSlot={<button>详 情</button>}
      />

      <Card2>
        <div>
          <h2>最新消息！！！</h2>
          <hr />
        </div>
        <div>
          <p>重磅推荐，2025蛇年庆典，看看有你的那份吗</p>
          <img src="https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/%E6%B3%95%E5%9B%BD%E9%9C%9E%E6%85%95%E5%B0%BC%E5%9C%B0%E5%8C%BA%E7%9A%84%E6%98%9F%E8%BD%A8%20-%20%E6%90%9C%E7%B4%A2_a3eac28b.jpg" />
        </div>
        <button>详 情</button>
      </Card2>

      <MyCard
        titleSlot={<h2>Yeluzi</h2>}
        bodySlot={
          <>
            <img src="https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/507586d3-22ae-417a-aaaf-ca9af87046c6_child1.jpg" />
            <hr />
            <h3>
              电话：<span>181xxxxxxxx</span>
            </h3>
            <h3>
              邮箱：<span>123@123.com</span>
            </h3>
            <h3>
              地址：<span>江苏省南京市栖霞区羊山北路1号</span>
            </h3>
          </>
        }
        footerSlot={<button>关注</button>}
      />

      <CounterClass /> */}
    </>
  );
};

export default App;
