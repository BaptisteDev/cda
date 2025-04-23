import { Todo } from "../interfaces/Todo";

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

export default function TodoList({ todos, deleteTodo }: TodoListProps) {
  return (
    <div className="mt-4">
      {todos.map((todo) => (
        <div key={todo.id}>
          <p onClick={() => deleteTodo(todo.id)}>{todo.text}</p>
        </div>
      ))}
    </div>
  );
}
