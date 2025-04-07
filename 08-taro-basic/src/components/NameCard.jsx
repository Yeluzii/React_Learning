import { Image, View } from "@tarojs/components";

const CardName = ({ cardInfo }) => {
  return (
    <View className="card-component">
      <Image src={cardInfo.avatar} className="avatar" />
      <View className="name">{cardInfo.name}</View>
      <View className="card-info">
        <View>职位：{cardInfo.position}</View>
        <View>公司：{cardInfo.company}</View>
        <View>电话：{cardInfo.phone}</View>
        <View>邮箱：{cardInfo.email}</View>
      </View>
    </View>
  );
};

export default CardName;
