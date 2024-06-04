import { useState, FormEvent } from "react";

interface IPropsNewTodoForm {
    addTodo: (title: string) => void
}

export default function NewTodoForm({addTodo}: IPropsNewTodoForm) {
  const [newItem, setNewItem] = useState("");

  const handleFormSubmit = function (event: FormEvent) {
    event.preventDefault();
    addTodo(newItem);
    setNewItem("");
  };

  return (
    <form className="new-item-form" onSubmit={(e) => handleFormSubmit(e)}>
      <label htmlFor="item">New Item</label>
      <input
        type="text"
        id="item"
        value={newItem}
        onChange={(e) => {
          setNewItem(e.target.value);
        }}
      />
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
}
