import { Todo } from "../../App";
import TodoItem from "../todo-item/TodoItem";

interface IPropsTodoList {
  todos: Todo[];
  toggleTodoStatus: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export default function TodoList({
  todos,
  toggleTodoStatus,
  deleteTodo,
}: IPropsTodoList) {
  return (
    <>
      <h1 className="header">Todo List</h1>
      {!todos.length ? (
        "No Todos To Show"
      ) : (
        <ul className="list">
          {todos?.map((todo: Todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodoStatus={toggleTodoStatus}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      )}
    </>
  );
}
