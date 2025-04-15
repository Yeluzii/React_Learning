export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/discover/index',
    'pages/profile/index',
    'pages/product/index',
    'pages/login/index',
    'pages/card/index',
    'pages/cashbook/index',
    'pages/music/index',
    'pages/basic/index',
    'pages/contact/index',
    'pages/container/index',
    'pages/device/index',
    'pages/form/index',
    'pages/location/index',
    'pages/map/index',
    'pages/media/index',
    'pages/skyline/index',
    'pages/component/index',
    'pages/api/index',
    'pages/webview/index',
    'pages/bluetooth/index',
    'pages/clipboard/index',
    'pages/scancode/index',
    'pages/network/index',
  ],
  permission:{
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示"
    }
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#4594D5',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#999",
    selectedColor: "#4594D5",
    backgroundColor: "#fff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./assets/tabs/home.png",
        selectedIconPath: "./assets/tabs/home-active.png",
      },
      {
        pagePath: "pages/discover/index",
        text: "发现",
        iconPath: "./assets/tabs/discover.png",
        selectedIconPath: "./assets/tabs/discover-active.png",
      },
      {
        pagePath: "pages/component/index",
        text: "组件",
        iconPath: "./assets/tabs/component.png",
        selectedIconPath: "./assets/tabs/component-active.png",
      },
      {
        pagePath: "pages/api/index",
        text: "API",
        iconPath: "./assets/tabs/api.png",
        selectedIconPath: "./assets/tabs/api-active.png",
      },
      {
        pagePath: "pages/profile/index",
        text: "我的",
        iconPath: "./assets/tabs/profile.png",
        selectedIconPath: "./assets/tabs/profile-active.png",
      },

    ],
  },
})
