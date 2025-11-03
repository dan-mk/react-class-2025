import { useState } from "react";

export function TaskForm({ onAddTask }) {
  const [taskInput, setTaskInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const taskTitle = taskInput.trim();
    if (taskTitle === "") {
      alert("Por favor, insira a descrição da tarefa.");
      return;
    }

    setTaskInput("");
    onAddTask(taskTitle);
  };

  return (
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
  );
}
