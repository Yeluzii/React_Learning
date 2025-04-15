import { useState } from "react";
import { View, Text, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

const Internet = () => {
  const [userData, setUserData] = useState([]); // 存储用户数据

  // 函数：获取用户数据
  const fetchUserData = () => {
    Taro.request({
      url: "http://117.72.93.22:3001/api/notes/user/1",
      method: "GET",
      dataType: "json",
      success: (res) => {
        if (res.statusCode === 200) {
          console.log("请求成功:", res.data);
          setUserData(res.data); // 将获取的用户数据保存到状态中
        } else {
          console.error("请求失败:", res);
        }
      },
      fail: (err) => {
        console.error("请求失败:", err);
      },
    });
  };

  return (
    <View className="internet">
      <Button className="fetch-button" onClick={fetchUserData}>
        获取用户1的笔记数据
      </Button>
      {userData.length > 0 && (
        <View className="notes-list">
          {userData.map((note) => (
            <View key={note.id} className="note-card">
              <View className="note-info">
                <View className="note-title">标题</View>
                <Text className="note-content">内容：{note.content}</Text>
                <View>创建时间：{note.created_at}</View>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default Internet;
