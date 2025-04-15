import { useEffect, useState } from "react";
import { View, Button, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

const Bluetooth = () => {
  const [devices, setDevices] = useState([]); // 存储找到的设备
  const [isScanning, setIsScanning] = useState(false); // 控制扫描状态

  // 初始化蓝牙适配器
  const initializeBluetooth = () => {
    Taro.openBluetoothAdapter({
      success: (res) => {
        console.log("蓝牙适配器初始化成功", res);
      },
      fail: (err) => {
        console.error("蓝牙适配器初始化失败", err);
        Taro.showToast({
          title: "蓝牙未开启或不支持",
          icon: "none",
        });
      },
    });
  };

  // 启动蓝牙设备搜索
  const startBluetoothScanning = () => {
    if (isScanning) return; // 如果已经在扫描中，直接返回

    setIsScanning(true); // 设置扫描状态为true
    Taro.startBluetoothDevicesDiscovery({
      success: (res) => {
        console.log("蓝牙设备搜索开始", res);
      },
      fail: (err) => {
        console.error("启动搜索失败", err);
      },
    });

    // 监听发现的新设备
    Taro.onBluetoothDeviceFound((result) => {
      console.log("发现新设备", result.devices);
      const updatedDevices = result.devices.map((device) => ({
        id: device.deviceId,
        name: device.name || device.localName,
      }));
      // 去重并更新设备列表
      setDevices((prevDevices) => {
        const newDevices = [...prevDevices, ...updatedDevices];
        const uniqueDevices = Array.from(
          new Set(newDevices.map((d) => d.id))
        ).map((id) => newDevices.find((d) => d.id === id));
        return uniqueDevices;
      });
    });
  };

  // 停止蓝牙设备搜索
  const stopBluetoothScanning = () => {
    if (!isScanning) return; // 如果没有在扫描中，直接返回

    Taro.stopBluetoothDevicesDiscovery({
      complete: () => {
        console.log("停止搜索蓝牙设备");
        setIsScanning(false); // 将扫描状态设置为false
      },
    });
  };

  // 组件加载时初始化蓝牙适配器
  useEffect(() => {
    initializeBluetooth();

    return () => {
      stopBluetoothScanning(); // 清理时也停止设备搜索
    };
  }, []);

  return (
    <View className="bluetooth">
      <Text className="title">发现的蓝牙设备:</Text>
      {devices.length > 0 ? (
        devices.map((device) => (
          <View key={device.id} className="device">
            <Text>{device.name || "未知设备"}</Text>
          </View>
        ))
      ) : (
        <Text>未发现任何设备</Text>
      )}
      <Button
        type="primary"
        onClick={startBluetoothScanning}
        disabled={isScanning}
      >
        {isScanning ? "正在查找…" : "开始查找"}
      </Button>
      <Button
        type="danger"
        onClick={stopBluetoothScanning}
        disabled={!isScanning}
      >
        停止查找
      </Button>
    </View>
  );
};

export default Bluetooth;
