/* eslint-disable no-debugger */
import { useEffect, useState } from "react";
import "./styles.css";

import NewTodoForm from "./components/new-todo-form/NewTodoForm";
import TodoList from "./components/todo-list/TodoList";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const fetchedTodos = window?.localStorage.getItem("todos");
    if(fetchedTodos === null) return [];
    return JSON.parse(fetchedTodos);
  });

  useEffect(() => {
    window?.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo =  function(title: string) {
    if(title === "")
      return;
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  const toggleTodoStatus = function(id: string) {
    setTodos((currentTodos) => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo;
      });
    })
  };

  const deleteTodo = function(id: string) {
    setTodos((currentTodo) => {
      return currentTodo.filter(todo => todo?.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodoStatus={toggleTodoStatus} deleteTodo={deleteTodo} />
    </>
  );
}
