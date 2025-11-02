import "./style.css";

const state = {
  newTask: "Tarefa 3",
  tasks: [
    {
      id: 1,
      title: "Tarefa 1",
      completed: true,
    },
    {
      id: 2,
      title: "Tarefa 2",
      completed: false,
    },
  ],
};

function renderForm() {
  const taskForm = document.createElement("form");
  taskForm.id = "task-form";
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskTitle = state.newTask.trim();
    if (taskTitle === "") {
      alert("Por favor, insira a descrição da tarefa.");
      return;
    }

    let newId = 1;
    if (state.tasks.length > 0) {
      newId = state.tasks.at(-1).id + 1;
    }

    state.newTask = "";
    state.tasks.push({
      id: newId,
      title: taskTitle,
      completed: false,
    });

    render();
  });

  const taskInput = document.createElement("input");
  taskInput.id = "task-input";
  taskInput.type = "text";
  taskInput.placeholder = "Descrição da tarefa";
  taskInput.autocomplete = "off";
  taskInput.autofocus = true;
  taskInput.value = state.newTask;
  taskInput.addEventListener("input", (event) => {
    state.newTask = event.target.value;
  });

  const submitButton = document.createElement("button");
  submitButton.classList.add("button");
  submitButton.type = "submit";
  submitButton.textContent = "Adicionar";

  taskForm.appendChild(taskInput);
  taskForm.appendChild(submitButton);

  return taskForm;
}

function renderTask(task) {
  const taskItem = document.createElement("li");
  taskItem.classList.add("task");
  if (task.completed) {
    taskItem.classList.add("completed");
  }

  const taskTitleSpan = document.createElement("span");
  taskTitleSpan.classList.add("task-title");
  taskTitleSpan.textContent = task.title;

  const taskActionsDiv = document.createElement("div");
  taskActionsDiv.classList.add("task-actions");

  if (!task.completed) {
    const completeButton = document.createElement("button");
    completeButton.classList.add("small-button");
    completeButton.textContent = "Marcar como concluída";
    taskActionsDiv.appendChild(completeButton);
  }

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("small-button", "danger");
  deleteButton.textContent = "Excluir";

  taskActionsDiv.appendChild(deleteButton);
  taskItem.appendChild(taskTitleSpan);
  taskItem.appendChild(taskActionsDiv);

  return taskItem;
}

function render() {
  const app = document.querySelector("#app");
  app.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = "Lista de tarefas";

  const taskForm = renderForm();

  const taskList = document.createElement("ul");
  taskList.id = "task-list";

  state.tasks.forEach((task) => {
    const taskItem = renderTask(task);
    taskList.appendChild(taskItem);
  });

  app.appendChild(title);
  app.appendChild(taskForm);
  app.appendChild(taskList);
}

render();
