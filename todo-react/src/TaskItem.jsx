export function TaskItem({ task, onComplete, onDelete }) {
  return (
    <li className={`task${task.completed ? " completed" : ""}`}>
      <span className="task-title">{task.title}</span>
      <div className="task-actions">
        {!task.completed && (
          <button className="small-button" onClick={() => onComplete(task.id)}>
            Marcar como concluída
          </button>
        )}
        <button
          className="small-button danger"
          onClick={() => onDelete(task.id)}
        >
          Excluir
        </button>
      </div>
    </li>
  );
}
