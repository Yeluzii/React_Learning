import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import TextInput from "./components/TextInput";
import TodoListApp from "./components/TodoListApp";
import FetchData from "./components/FetchData";
import PageTitle from "./components/PageTitle";
import CurrentTime from "./components/CurrentTime";
import Weather from "./components/Weather";
import UserLogin from "./components/UserLogin";
import Counter from "./components/Counter";
import Form from "./components/Form";
import ThemeButton from "./components/ThemeButton";
import ThemeProvider from "./components/ThemeProvider";
import ExpensiveCalculationParent from "./components/ExpensiveCalculationParent";
import ListFilterParent from "./components/ListFilterParent";
import Parent from "./components/Parent";
import ExpensiveComponentParent from "./components/ExpensiveComponentParent";
import FocusInput from "./components/FocusInput";
import PreviousValue from "./components/PreviousValue";
import Parent1 from "./components/Parent1";
import Parent2 from "./components/Parent2";
import ComponentSize from "./components/ComponentSize";
import AnimateBox from "./components/AnimateBox";

const App = () => {
  return (
    <>
      {/* <ThemeToggle /> */}
      {/* <TextInput /> */}
      {/* <TodoListApp /> */}
      {/* <FetchData /> */}
      {/* <PageTitle /> */}
      {/* <CurrentTime /> */}
      {/* <Weather /> */}
      {/* <UserLogin /> */}

      {/* useReducer 计数器组件 */}
      <Counter />
      <hr />
      {/* useReducer 表单验证 */}
      <Form />
      <hr />
      {/* useContext 主题上下文 */}
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>
      <hr />
      {/* useMemo 优化计算 */}
      <ExpensiveCalculationParent />
      <hr />
      {/* useMemo 列表过滤 */}
      <ListFilterParent />
      <hr />
      {/* useCallback 防止不必要的函数重渲染 */}
      <Parent />
      <hr />
      {/* useCallback 事件处理 */}
      <ExpensiveComponentParent />
      <hr />
      {/* useRef 获取 DOM 元素 */}
      <FocusInput />
      <hr />
      {/* useRef 保存上一个值 */}
      <PreviousValue />
      <hr />
      {/* useImperativeHandle 父组件控制子组件的方法 */}
      <Parent1 />
      <hr />
      {/* useImperativeHandle 暴露自定义方法 */}
      <Parent2 />
      <hr />
      {/* useLayoutEffect 获取元素尺寸 */}
      <ComponentSize />
      <hr />
      {/* useLayoutEffect 动画同步 */}
      <AnimateBox />
      <hr />
    </>
  );
};

export default App;
