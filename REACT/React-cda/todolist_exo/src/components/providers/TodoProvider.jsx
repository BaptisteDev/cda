import React, { useState } from "react";
import { TodoContext } from "../../context/TodoContext";

export default function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([]); // stockage des todos
  const [error, setError] = useState(""); // Erreur pour l'ajout
  const [editError, setEditError] = useState(""); // Erreur pour l'édition

  // ajout d'une todo
  function addTodo(content) {
    // nous enlevons les espaces autour du mot et le mettons en minuscule
    const contentNorm = content.trim().toLowerCase();
    // nous vérifions si dans notre tableau il y a une occurence (vérification toujours avec trim et minuscule)
    const duplicate = todoList.find(
      (todo) => todo.content.trim().toLowerCase() === contentNorm
    );

    // si la todo existe, nous attribuons un message d'erreur
    if (duplicate) {
      setError("Cette todo existe déjà.");
      return;
    }
    // nous vidons le message d'erreur (s'il est présent) en cas de nouvel ajout
    setError("");
    // création de la nouvelle todo avec le contenu récupéré et les clés done et edit par défaut à false et on génére un ID aléatoire
    const todo = {
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false,
    };
    // on ajoute notre todo au tableau
    setTodoList([...todoList, todo]);
  }

  // fonction pour valider ou dévalider une todo
  function toggleTodo(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  // fonction pour supprimer une todo
  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  // fonction pour toggle le mode édition
  function toggleEditTodo(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, edit: !todo.edit } : todo
      )
    );
    // Réinitialise l'erreur d'édition au changement d'état
    setEditError("");
  }

  // fonction pour valider une modification
  function saveTodo(id, content) {
    console.log(content);

    const contentNorm = content.trim().toLowerCase();
    const duplicate = todoList.find(
      (todo) =>
        todo.id !== id && todo.content.trim().toLowerCase() === contentNorm
    );
    if (duplicate) {
      setEditError("Cette todo existe déjà.");
      return;
    }
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, content, edit: false } : todo
      )
    );
    // Réinitialiser l'erreur après une sauvegarde réussie
    setEditError("");
  }

  // annulation de la modification
  function cancelEditTodo(id) {
    setTodoList(
      todoList.map((todo) => (todo.id === id ? { ...todo, edit: false } : todo))
    );
    // Réinitialiser l'erreur lors de l'annulation
    setEditError("");
  }

  return (
    <div>
      <div>
        <TodoContext.Provider
          value={{
            todoList,
            addTodo,
            error,
            toggleTodo,
            deleteTodo,
            toggleEditTodo,
            saveTodo,
            cancelEditTodo,
          }}
        >
          {children}
        </TodoContext.Provider>
      </div>
    </div>
  );
}
