import { Input, View, Text, Button } from "@tarojs/components";
import NameCard from "../../components/NameCard";
import "./index.scss";
import { useState } from "react";

const Card = () => {
  const [formData, setFormData] = useState({
    name: "",
    avatar:
      "https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/b40a5ed9-9726-46f8-a74d-89e8aba48d68_da2d9eae49872968ecae3f715ca2e52.jpg",
    position: "",
    company: "",
    phone: "",
    email: "",
  });
  const [cardInfo, setCardInfo] = useState(null);

  const handleInputChange = (key) => (e) => {
    setFormData({
      ...formData,
      [key]: e.detail.value,
    });
  };

  const generateCard = () => {
    setCardInfo({ ...formData });
  };

  const clearCard = () => {
    setFormData({
      name: "",
      avatar:
        "https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/b40a5ed9-9726-46f8-a74d-89e8aba48d68_da2d9eae49872968ecae3f715ca2e52.jpg",
      position: "",
      company: "",
      phone: "",
      email: "",
    });
    setCardInfo(null);
  };

  return (
    <View className="card">
      {cardInfo && <NameCard cardInfo={cardInfo} />}
      <View className="form">
        <View>
          <Text>姓名</Text>
          <Input
            type="text"
            placeholder="请输入姓名"
            value={formData.name}
            onInput={handleInputChange("name")}
          />
        </View>
        <View>
          <Text>职位</Text>
          <Input
            type="text"
            placeholder="请输入职位"
            value={formData.position}
            onInput={handleInputChange("position")}
          />
        </View>
        <View>
          <Text>公司</Text>
          <Input
            type="text"
            placeholder="请输入公司"
            value={formData.company}
            onInput={handleInputChange("company")}
          />
        </View>
        <View>
          <Text>手机号</Text>
          <Input
            type="text"
            placeholder="请输入手机号"
            value={formData.phone}
            onInput={handleInputChange("phone")}
          />
        </View>
        <View>
          <Text>邮箱</Text>
          <Input
            type="text"
            placeholder="请输入邮箱"
            value={formData.email}
            onInput={handleInputChange("email")}
          />
        </View>
        <View>
          <Button type="primary" onClick={generateCard}>
            生成名片
          </Button>
          <Button onClick={clearCard}>清空</Button>
        </View>
      </View>
    </View>
  );
};

export default Card;
