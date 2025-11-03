import { useState } from "react";
import { TaskForm } from "./TaskForm";
import { TaskItem } from "./TaskItem";

export function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskTitle) => {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const handleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div id="app">
      <h1>Lista de tarefas</h1>
      <TaskForm onAddTask={handleAddTask} />
      <ul id="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={handleComplete}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
