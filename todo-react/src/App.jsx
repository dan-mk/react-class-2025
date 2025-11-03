import { useState } from "react";
import { TaskForm } from "./TaskForm";

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
          <li
            key={task.id}
            className={`task${task.completed ? " completed" : ""}`}
          >
            <span className="task-title">{task.title}</span>
            <div className="task-actions">
              {!task.completed && (
                <button
                  className="small-button"
                  onClick={() => handleComplete(task.id)}
                >
                  Marcar como concluída
                </button>
              )}
              <button
                className="small-button danger"
                onClick={() => handleDelete(task.id)}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
