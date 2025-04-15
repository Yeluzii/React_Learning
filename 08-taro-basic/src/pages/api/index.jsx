import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

const Api = () => {
  return (
    <View className="discover3">
      <View
        className="box3"
        onClick={() => Taro.navigateTo({ url: "/pages/contact/index" })}
      >
        联系人
      </View>
      <View
        className="box3"
        onClick={() => Taro.navigateTo({ url: "/pages/device/index" })}
      >
        设备
      </View>
      <View
        className="box3"
        onClick={() => Taro.navigateTo({ url: "/pages/bluetooth/index" })}
      >
        蓝牙
      </View>
      <View
        className="box3"
        onClick={() => Taro.navigateTo({ url: "/pages/clipboard/index" })}
      >
        剪贴板
      </View>
      <View
        className="box3"
        onClick={() => Taro.navigateTo({ url: "/pages/scancode/index" })}
      >
        扫码
      </View>
      <View
        className="box3"
        onClick={() => Taro.navigateTo({ url: "/pages/network/index" })}
      >
        网络请求
      </View>
    </View>
  );
};

export default Api;
