import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Card, message, Typography } from "antd";
import users from "../data/user";

const { Title } = Typography;

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const onFinish = (values) => {
    const user = users.find(
      (u) => u.username === values.username && u.password === values.password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      window.dispatchEvent(new Event("userStatusChanged"));
      navigate("/");
    } else {
      messageApi.error("用户名或密码错误");
    }
  };

  return (
    <>
      {contextHolder}
      <div style={{ maxWidth: 400, margin: "100px auto" }}>
        <Card hoverable>
          <Title level={3} style={{ textAlign: "center", marginBottom: 30 }}>
            用户登录
          </Title>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: "请输入用户名" }]}
            >
              <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input.Password placeholder="请输入密码" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Login;
