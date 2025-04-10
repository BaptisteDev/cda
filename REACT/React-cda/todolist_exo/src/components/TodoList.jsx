import OneTodo from "./OneTodo";
import EditTodo from "./EditTodo";
import { TodoContext } from "../context/TodoContext";
import React, { useContext } from "react";

export default function TodoList() {
  const {
    todoList,
    editError,
    toggleTodo,
    deleteTodo,
    toggleEditTodo,
    saveTodo,
    cancelEditTodo,
  } = useContext(TodoContext);

  return todoList.length ? (
    <ul>
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo
            key={todo.id}
            todo={todo}
            saveTodo={saveTodo}
            cancelEditTodo={() => cancelEditTodo(todo.id)}
            editError={editError} // Transmission de l'erreur d'édition
          />
        ) : (
          <OneTodo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={() => toggleTodo(todo.id)}
            toggleEditTodo={() => toggleEditTodo(todo.id)}
          />
        )
      )}
    </ul>
  ) : (
    <p>Pas de todo pour le moment ...</p>
  );
}
