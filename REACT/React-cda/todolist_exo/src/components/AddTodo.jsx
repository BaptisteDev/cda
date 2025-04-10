import { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function AddTodo() {
  const { addTodo } = useContext(TodoContext);
  const { error } = useContext(TodoContext);

  // stockage de la valeur de l'input
  const [value, setValue] = useState("");
  // récupération de la saisie à chaque modification
  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }
  // si au moins un caractère a été saisi, nous ajoutons la todo et vidons le champ
  function handleClick() {
    if (value.length) {
      addTodo(value);
      setValue("");
    }
  }
  // même logique avec validation par la touche entrée
  function handleKeyDown(e) {
    if (e.code === "Enter" && value.length) {
      addTodo(value);
      setValue("");
    }
  }
  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center mb-20`}
    >
      <div>
        <input
          type="text"
          value={value}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          placeholder="Ajouter une todo"
          className="mr-15 flex-fill"
        />
        <button onClick={handleClick} className="btn btn-primary">
          Ajouter
        </button>
      </div>
      <div>
        {error && (
          <p
            className="error-feedback"
            style={{ color: "red", marginTop: "10px" }}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
