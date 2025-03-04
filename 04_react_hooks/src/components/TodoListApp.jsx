import { useState } from "react";

const TodoListApp = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (todo) {
      setTodoList((prev) => [
        ...prev,
        // 加入是否完成的属性
        { text: todo, completed: false, id: Date.now() },
      ]);
      setTodo("");
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleComplete = (id) => {
    setTodoList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={todo}
          onChange={handleChange}
          placeholder="输入待办事项"
        />
        <button onClick={addTodo}>添加</button>
      </div>
      <div>
        <h2>待办清单</h2>
        <ul>
          {todoList.map((item) => (
            <li key={item.id} className={item.completed ? "completed" : ""}>
              <span>{item.text}</span>
              <button
                onClick={() => handleComplete(item.id)}
                className={item.completed ? "undo" : "complete"}
              >
                {item.completed ? "已完成" : "完成"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoListApp;
