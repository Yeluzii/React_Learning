import { useState } from "react";
import { View, Input, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

const Clipboard = () => {
  const [inputValue, setInputValue] = useState(""); // 保存输入框的内容
  const [pastedValue, setPastedValue] = useState(""); // 保存粘贴框的内容

  // 复制内容到剪贴板的函数
  const copyToClipboard = () => {
    if (!inputValue) {
      Taro.showToast({
        title: "请输入内容",
        icon: "none",
        duration: 1500,
      });
      return; // 如果输入为空，提示用户
    }

    Taro.setClipboardData({
      data: inputValue, // 使用用户输入的内容
      success: (res) => {
        // 弹出toast提示
        Taro.showToast({
          title: "内容已复制",
          icon: "success",
          duration: 1500,
        });

        // 验证剪贴板内容是否复制成功
        Taro.getClipboardData({
          success: () => {
            console.log("当前剪贴板内容为:", res.data);
          },
          fail: (err) => {
            console.error("获取剪贴板内容失败:", err);
          },
        });
      },
      fail: (err) => {
        console.error("复制失败:", err);
      },
    });
  };

  // 从剪贴板粘贴内容
  const pasteFromClipboard = () => {
    Taro.getClipboardData({
      success: (res) => {
        setPastedValue(res.data); // 设置粘贴框内容为剪贴板数据
      },
      fail: (err) => {
        console.error("粘贴失败:", err);
      },
    });
  };

  return (
    <View className="clipboard">
      <View className="copy-section">
        <View className="title">请输入内容：</View>
        <Input
          type="text"
          placeholder="请输入内容"
          value={inputValue}
          onInput={(e) => setInputValue(e.target.value)} // 更新输入值
          className="input"
        />
        <Button size="mini" onClick={copyToClipboard} className="copy-button">
          复制
        </Button>
      </View>
      <View className="paste-section">
        <View className="title">从剪贴板粘贴内容：</View>
        <Button
          size="mini"
          onClick={pasteFromClipboard}
          className="paste-button"
        >
          粘贴
        </Button>
        <Input
          type="text"
          placeholder="复制粘贴的内容将在这里显示"
          value={pastedValue}
          onInput={(e) => setPastedValue(e.target.value)} // 允许编辑粘贴的内容
          className="input"
        />
      </View>
    </View>
  );
};

export default Clipboard;
