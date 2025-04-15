import { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Swiper,
  SwiperItem,
  CoverView,
  Image,
  MovableArea,
  MovableView,
} from "@tarojs/components";
import "./index.scss";

const Container = () => {
  // 准备Swiper展示的图片数据
  const swiperImages = [
    "https://mqxu-oss.oss-cn-hangzhou.aliyuncs.com/banner/1.jpg",
    "https://mqxu-oss.oss-cn-hangzhou.aliyuncs.com/banner/2.jpg",
    "https://mqxu-oss.oss-cn-hangzhou.aliyuncs.com/banner/3.jpg",
  ];

  // 准备ScrollView展示的列表数据
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [listItems, setListItems] = useState([]);
  const [refresherTriggered, setRefresherTriggered] = useState(false);
  const [x1, setX1] = useState(0);
  const [y1, setY1] = useState(0);
  const [x2, setX2] = useState(0);
  const [y2, setY2] = useState(0);
  const [scale, setScale] = useState(1);

  // 模拟分页请求
  const fetchData = async (currentPage) => {
    setLoading(true);
    // 模拟API请求延迟
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newItems = Array.from(
      { length: 5 },
      (_, i) => `列表项 ${(currentPage - 1) * 5 + i + 1}`
    );

    setListItems((prev) => [...prev, ...newItems]);
    setHasMore(currentPage < 3);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(page);
  }, []);

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage((prev) => {
        const newPage = prev + 1;
        fetchData(newPage);
        return newPage;
      });
    }
  };

  // 处理下拉刷新
  const handleRefresh = () => {
    setRefresherTriggered(true);
    setPage(1);
    setListItems([]);
    fetchData(1).finally(() => setRefresherTriggered(false));
  };

  return (
    <View className="container">
      {/* 新增三个案例 */}
      <View className="section">
        <View className="section-title">横向拖动</View>
        <MovableArea
          className="demo-area"
          style="height: 150px; width: 100%; background: #f0f0f0;"
        >
          <MovableView
            className="demo-view"
            direction="horizontal"
            x={x1}
            y={0}
            onChange={(e) => setX1(e.detail.x)}
            style="height: 100px; width: 100px; background: #4a90e2;"
          >
            左右拖动
          </MovableView>
        </MovableArea>
        <View className="coord">X轴坐标：{x1}</View>
      </View>

      <View className="section">
        <View className="section-title">纵向拖动</View>
        <MovableArea
          className="demo-area"
          style="height: 150px; width: 100%; background: #f0f0f0;"
        >
          <MovableView
            className="demo-view"
            direction="vertical"
            x={0}
            y={y1}
            onChange={(e) => setY1(e.detail.y)}
            style="height: 100px; width: 100px; background: #50e3c2;"
          >
            上下拖动
          </MovableView>
        </MovableArea>
        <View className="coord">Y轴坐标：{y1}</View>
      </View>

      <View className="section">
        <View className="section-title">惯性滑动</View>
        <MovableArea
          className="demo-area"
          style="height: 200px; width: 100%; background: #f0f0f0;"
        >
          <MovableView
            className="demo-view"
            direction="all"
            inertia
            out-of-bounds
            x={x2}
            y={y2}
            onChange={(e) => {
              setX2(e.detail.x);
              setY2(e.detail.y);
            }}
            onScale={(e) => setScale(e.detail.scale)}
            scale
            scaleMin={0.5}
            scaleMax={2}
            style="height: 80px; width: 80px; background: #ff6b6b;"
          >
            自由拖动
          </MovableView>
        </MovableArea>
        <View className="coord">
          坐标：({x2},{y2}) 缩放：{scale}
        </View>
      </View>
      {/* ScrollView组件示例：可滚动视图容器 */}
      <View className="section">
        <View className="section-title">ScrollView示例</View>
        <ScrollView
          className="scroll-view"
          scrollY
          scrollWithAnimation
          refresherEnabled={true}
          refresherTriggered={refresherTriggered}
          onRefresherRefresh={handleRefresh}
          onScrollToLower={handleLoadMore}
        >
          {listItems.map((item, index) => (
            <View key={index} className="scroll-item">
              {item}
            </View>
          ))}
          {/* 加载状态提示 */}
          {loading && <View className="loading-text">加载中...</View>}
          {!hasMore && <View className="loading-text">没有更多数据了</View>}
        </ScrollView>
      </View>

      {/* Swiper组件示例：轮播图容器 */}
      <View className="section">
        <View className="section-title">Swiper示例</View>
        <Swiper
          className="swiper"
          indicatorDots // 显示面板指示点
          autoplay // 自动播放
          interval={3000} // 自动播放间隔时间（毫秒）
          circular // 循环播放
        >
          {swiperImages.map((image, index) => (
            <SwiperItem key={index}>
              <Image className="swiper-image" src={image} mode="aspectFill" />
            </SwiperItem>
          ))}
        </Swiper>
      </View>

      {/* CoverView组件示例：可覆盖在原生组件上的文本视图 */}
      <View className="section">
        <View className="section-title">CoverView示例</View>
        <View className="cover-container">
          <Image
            className="background-image"
            src="https://mqxu-oss.oss-cn-hangzhou.aliyuncs.com/banner/1.jpg"
            mode="aspectFill"
          />
          <CoverView className="cover-view">
            <CoverView className="cover-text">这是一个CoverView示例</CoverView>
            <CoverView className="cover-description">
              CoverView可以覆盖在原生组件上
            </CoverView>
          </CoverView>
        </View>
      </View>
    </View>
  );
};

export default Container;
