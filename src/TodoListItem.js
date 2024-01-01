import React, { useState } from "react";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  const { title, id } = todo;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <li>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label
        htmlFor={id}
        style={{ textDecoration: isChecked ? "line-through" : "none" }}
      >
        {title}
      </label>
      &nbsp;
      <button type="button" onClick={() => onRemoveTodo(id)}>
        Remove
      </button>
    </li>
  );
};

export default TodoListItem;
