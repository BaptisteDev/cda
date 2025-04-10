import { useState } from "react";
import styles from "./App.module.scss";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoProvider from "./components/providers/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div
        className={`d-flex justify-content-center my-30 ${styles.appContainer}`}
      >
        <div className="card p-20">
          <h1 className="mb-20">Todo List</h1>
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
