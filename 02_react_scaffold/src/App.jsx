import Counter from "./components/Counter";
import HelloWorld from "./components/HelloWorld";
import Students from "./components/Students";
import TaskList from "./components/Tasks";
import RainbowText from "./components/RainbowText";
import ToggleSwitch from "./components/ToggleSwitch";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <HelloWorld />
      <Students />
      <Counter />
      <TaskList />
      <RainbowText />
      <Card />
      <ToggleSwitch />
    </div>
  );
}

export default App;
