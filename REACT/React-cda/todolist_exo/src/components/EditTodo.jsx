import { useState } from "react";

export default function EditTodo({
  todo,
  saveTodo,
  cancelEditTodo,
  editError,
}) {
  const [value, setValue] = useState(todo.content);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleClick() {
    if (value.length) {
      saveTodo(todo.id, value);
      // On ne vide pas automatiquement l'input pour laisser l'utilisateur corriger en cas d'erreur
    }
  }

  function handleKeyDown(e) {
    if (e.code === "Enter" && value.length) {
      saveTodo(todo.id, value);
    }
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mb-20">
      <div className="d-flex justify-content-center align-items-center w-100">
        <input
          type="text"
          value={value}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          placeholder="Modifier la todo"
          className="mr-15 flex-fill"
        />
        <button
          onClick={() => cancelEditTodo(todo.id)}
          className="btn btn-reverse-primary mr-15"
        >
          Annuler
        </button>
        <button onClick={handleClick} className="btn btn-primary">
          Sauvegarder
        </button>
      </div>
      {/* Affichage du message d'erreur s'il existe */}
      {editError && (
        <p
          className="error-feedback"
          style={{ color: "red", marginTop: "10px" }}
        >
          {editError}
        </p>
      )}
    </div>
  );
}
