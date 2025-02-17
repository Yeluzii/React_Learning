import Task from "./Task";

const taskList = [
  {
    id: 1,
    name: "吃饭",
    completed: true,
  },
  {
    id: 2,
    name: "睡觉",
    completed: false,
  },
  {
    id: 3,
    name: "敲代码",
    completed: false,
  },
];

const TaskList = () => {
  const undefinedCount = taskList.filter((task) => !task.completed).length;
  return (
    <div
      style={{
        textAlign: "center",
        border: "1px black solid",
        marginTop: "20px",
      }}
    >
      <h2>当前未完成任务数：{undefinedCount}</h2>
      {taskList.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TaskList;
