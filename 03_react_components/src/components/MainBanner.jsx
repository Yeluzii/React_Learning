import { Carousel } from "antd";

const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "400px",
  textAlign: "center",
  background: "#364d79",
};

const MainBanner = () => {
  return (
    <Carousel autoplay effect="fade" style={{ margin: "10px 30%" }}>
      <div>
        <img
          style={{
            ...contentStyle,
            objectFit: "cover",
          }}
          src="https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/c9a6e637-de01-496a-b8e6-f8a523114391_p1.png"
          alt="banner1"
        />
      </div>
      <div>
        <img
          style={{ ...contentStyle, objectFit: "cover" }}
          src="https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/%E6%B3%95%E5%9B%BD%E9%9C%9E%E6%85%95%E5%B0%BC%E5%9C%B0%E5%8C%BA%E7%9A%84%E6%98%9F%E8%BD%A8%20-%20%E6%90%9C%E7%B4%A2_a3eac28b.jpg"
          alt="banner2"
        />
      </div>
    </Carousel>
  );
};

export default MainBanner;
