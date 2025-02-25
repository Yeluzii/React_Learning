import Input from "./Input";
import { useState } from "react";

const InputParent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (newVal) => {
    // 更新组件状态
    setInputValue(newVal);
  };

  return (
    <>
      <Input onInputChange={handleInputChange} />
      <h2>输入的值是：{inputValue}</h2>
    </>
  );
};

export default InputParent;
