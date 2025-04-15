import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

const Component = () => {
  return (
    <View className="discover">
      <View
        className="box"
        onClick={() => Taro.navigateTo({ url: "/pages/container/index" })}
      >
        容器
      </View>
      <View
        className="box"
        onClick={() => Taro.navigateTo({ url: "/pages/basic/index" })}
      >
        基础内容
      </View>
      <View
        className="box"
        onClick={() => Taro.navigateTo({ url: "/pages/form/index" })}
      >
        表单组件
      </View>
      <View
        className="box"
        onClick={() => Taro.navigateTo({ url: "/pages/skyline/index" })}
      >
        skyline
      </View>
      <View
        className="box"
        onClick={() => Taro.navigateTo({ url: "/pages/media/index" })}
      >
        媒体组件
      </View>
      <View
        className="box"
        onClick={() => Taro.navigateTo({ url: "/pages/map/index" })}
      >
        地图
      </View>
      <View
        className="box"
        onClick={() => Taro.navigateTo({ url: "/pages/location/index" })}
      >
        定位
      </View>
      <View
        className="box"
        onClick={() => Taro.navigateTo({ url: "/pages/webview/index" })}
      >
        webview
      </View>
    </View>
  );
};

export default Component;
