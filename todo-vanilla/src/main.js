import "./style.css";

const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskTitle = taskInput.value.trim();
  if (taskTitle === "") {
    alert("Por favor, insira a descrição da tarefa.");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.classList.add("task");

  const taskTitleSpan = document.createElement("span");
  taskTitleSpan.classList.add("task-title");
  taskTitleSpan.textContent = taskTitle;

  const taskActionsDiv = document.createElement("div");
  taskActionsDiv.classList.add("task-actions");

  const completeButton = document.createElement("button");
  completeButton.classList.add("small-button");
  completeButton.textContent = "Marcar como concluída";

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("small-button", "danger");
  deleteButton.textContent = "Excluir";

  taskItem.appendChild(taskTitleSpan);
  taskItem.appendChild(taskActionsDiv);
  taskActionsDiv.appendChild(completeButton);
  taskActionsDiv.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  taskInput.value = "";
  taskInput.focus();
});
