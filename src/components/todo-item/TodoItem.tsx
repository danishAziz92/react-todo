interface IPropsTodoItem {
  id: string;
  title: string;
  completed: boolean;
  toggleTodoStatus: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export default function TodoItem(props: IPropsTodoItem) {
  const { id, title, completed, toggleTodoStatus, deleteTodo } = props;
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodoStatus(id)}
        ></input>
        {title}
      </label>
      <button
        className="btn btn-danger"
        onClick={() => {
          deleteTodo(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}


//Here Kind of Prop drilling is happening. The toggleTodoStatus and deleteTodo fns are being passed
//from the App -> List -> Item component. Central state management solutions help with this