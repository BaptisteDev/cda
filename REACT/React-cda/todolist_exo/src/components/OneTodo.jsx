export default function OneTodo({
  todo,
  deleteTodo,
  toggleTodo,
  toggleEditTodo,
}) {
  return (
    <ul className="mb-10 p-10 d-flex justify-content-center align-items-center">
      <span className="flex-fill mr-15">
        {todo.content} {todo.done && "( 🗸 )"}
      </span>
      <button onClick={toggleTodo} className="btn btn-primary mr-15">
        Valider
      </button>
      <button onClick={toggleEditTodo} className="btn btn-primary mr-15">
        Modifier
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="btn btn-reverse-primary mr-15"
      >
        Supprimer
      </button>
    </ul>
  );
}
