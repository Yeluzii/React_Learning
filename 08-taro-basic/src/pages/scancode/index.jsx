import { useState } from "react";
import { View, Text, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

const Scancode = () => {
  const [scanResult, setScanResult] = useState(null); // 存储扫码结果

  // 函数：调用扫码接口
  const handleScanCode = () => {
    Taro.scanCode({
      onlyFromCamera: false, // 允许从相机和相册扫码
      success: (res) => {
        console.log("扫码成功:", res);
        setScanResult(res); // 更新扫码结果状态
      },
      fail: (err) => {
        console.error("扫码失败:", err);
        Taro.showToast({
          title: "扫码失败，请重试",
          icon: "none",
        });
      },
      complete: (res) => {
        console.log("扫码完成:", res);
      },
    });
  };

  return (
    <View className="scancode">
      <Button
        type="primary"
        size="mini"
        className="scan-button"
        onClick={handleScanCode}
      >
        点击扫码/选择图片
      </Button>
      <View className="scan-result">
        {scanResult && (
          <>
            <View className="result-title">扫码详情</View>
            <View>扫码结果: {scanResult.result}</View>
            <View>扫码类型: {scanResult.scanType}</View>
            <View>源数据: {scanResult.rawData}</View>
          </>
        )}
      </View>
    </View>
  );
};

export default Scancode;
