import React from "react";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  const { title, id } = todo;

  return (
    <li>
      {title}
      &nbsp;
      <button type="button" onClick={() => onRemoveTodo(id)}>
        Remove
      </button>
    </li>
  );
};

export default TodoListItem;
