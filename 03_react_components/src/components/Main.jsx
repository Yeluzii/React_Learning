import MainBanner from "./MainBanner";
import MainProductList from "./MainProductList";
import Card from "./Card";

const Main = () => {
  return (
    <>
      <MainBanner />
      <div style={{ display: "flex" }}>
        <Card
          cover="https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/%E6%B3%95%E5%9B%BD%E9%9C%9E%E6%85%95%E5%B0%BC%E5%9C%B0%E5%8C%BA%E7%9A%84%E6%98%9F%E8%BD%A8%20-%20%E6%90%9C%E7%B4%A2_a3eac28b.jpg"
          avatar="https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/507586d3-22ae-417a-aaaf-ca9af87046c6_child1.jpg"
          title="01"
          content="111"
        />
        <Card
          cover="https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/%E6%B3%95%E5%9B%BD%E9%9C%9E%E6%85%95%E5%B0%BC%E5%9C%B0%E5%8C%BA%E7%9A%84%E6%98%9F%E8%BD%A8%20-%20%E6%90%9C%E7%B4%A2_a3eac28b.jpg"
          avatar="https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/507586d3-22ae-417a-aaaf-ca9af87046c6_child1.jpg"
          title="01"
          content="111"
        />
        <Card
          cover="https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/%E6%B3%95%E5%9B%BD%E9%9C%9E%E6%85%95%E5%B0%BC%E5%9C%B0%E5%8C%BA%E7%9A%84%E6%98%9F%E8%BD%A8%20-%20%E6%90%9C%E7%B4%A2_a3eac28b.jpg"
          avatar="https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/507586d3-22ae-417a-aaaf-ca9af87046c6_child1.jpg"
          title="01"
          content="111"
        />
      </div>
      {/* <MainProductList /> */}
    </>
  );
};

export default Main;
