import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

const Discover = () => {
  return (
    <View className="discover">
      <View
        className="box"
        onClick={() => Taro.navigateTo({ url: "/pages/card/index" })}
      >
        个人名片生成器
      </View>
      <View
        className="box"
        onClick={() => Taro.navigateTo({ url: "/pages/cashbook/index" })}
      >
        记账本
      </View>
      <View
        className="box"
        onClick={() => Taro.navigateTo({ url: "/pages/music/index" })}
      >
        音乐盒子
      </View>
    </View>
  );
};

export default Discover;
