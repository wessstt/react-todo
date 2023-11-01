import React from "react";

const TodoListItem = ({ listID, todo }) => {
  // console.log(todo);
  if (!todo) {
    return null;
  }
  return <li key={listID}>{todo}</li>;
};

export default TodoListItem;
