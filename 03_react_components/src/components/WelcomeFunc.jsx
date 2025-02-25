const WelcomeFunc = (props) => {
  return (
    <>
      <h1>Hello, {props.name}同学</h1>
      <img
        src={props.avatar}
        style={{ borderRadius: "50%", background: "#ffc400" }}
      />
      <h3>年龄：{props.age}</h3>
      <h3>地址：{props.address}</h3>
    </>
  );
};
export default WelcomeFunc;
