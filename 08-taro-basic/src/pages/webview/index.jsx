import { Component } from "react";
import { WebView } from "@tarojs/components";

class MyWebView extends Component {
  // 处理从网页传来的消息
  handleMessage = (e) => {
    const { data } = e.detail; // 从 event.detail 获取消息数据
    console.log("从网页接收到的:", data);
  };

  // 处理网页加载成功事件
  handleLoad = (e) => {
    const { src } = e.detail; // 网页成功加载的链接
    console.log("网页已加载:", src);
  };

  // 处理网页加载失败事件
  handleError = (e) => {
    const { src } = e.detail; // 加载失败的网页链接
    console.error("网页加载失败:", src);
  };

  render() {
    return (
      <>
        <WebView
          src="http://ychen.fun/" // 设置要加载的网页链接
          onMessage={this.handleMessage} // 绑定消息处理函数
          onLoad={this.handleLoad} // 绑定加载成功处理函数
          onError={this.handleError} // 绑定加载失败处理函数
        />
      </>
    );
  }
}

export default MyWebView;
