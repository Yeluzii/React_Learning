import { View } from "@tarojs/components";
import { useState } from "react";
import Taro from "@tarojs/taro";
import { AtForm, AtInput, AtButton } from "taro-ui";
import "./index.scss";

export default function Login() {
  const [username, setUsername] = useState("yeluzi");
  const [password, setPassword] = useState("111");

  const handleLogin = () => {
    if (!username || !password) {
      Taro.showToast({ title: "请输入用户名和密码", icon: "none" });
      return;
    }
    // 模拟登录成功
    Taro.setStorageSync("isLoggedIn", true);
    Taro.setStorageSync("username", username);
    Taro.setStorageSync(
      "avatarUrl",
      "https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/b40a5ed9-9726-46f8-a74d-89e8aba48d68_da2d9eae49872968ecae3f715ca2e52.jpg"
    );
    Taro.eventCenter.trigger("loginSuccess");

    Taro.showModal({
      title: "登录成功",
      icon: "success",
      success: () => {
        Taro.switchTab({ url: "/pages/index/index" });
      },
    });
  };

  return (
    <View className="login">
      <AtForm className="login-form">
        <AtInput
          name="username"
          title="用户名"
          type="text"
          placeholder="请输入用户名"
          value={username}
          onChange={setUsername}
        />
        <AtInput
          name="password"
          title="密码"
          type="password"
          placeholder="请输入密码"
          value={password}
          onChange={setPassword}
        />
        <AtButton type="primary" className="login-btn" onClick={handleLogin}>
          登录
        </AtButton>
      </AtForm>
    </View>
  );
}
