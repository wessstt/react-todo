import React from "react";

const TodoListItem = ({ listID, todo }) => {
  // console.log(todo);
  return <li key={listID}>{todo}</li>;
};

export default TodoListItem;
