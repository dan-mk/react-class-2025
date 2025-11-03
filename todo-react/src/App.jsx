import { useState } from "react";

export function App() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const taskTitle = taskInput.trim();
    if (taskTitle === "") {
      alert("Por favor, insira a descrição da tarefa.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };

    setTaskInput("");
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
      <form id="task-form" onSubmit={handleSubmit}>
        <input
          id="task-input"
          type="text"
          placeholder="Descrição da tarefa"
          autoComplete="off"
          autoFocus
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button className="button" type="submit">
          Adicionar
        </button>
      </form>
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
