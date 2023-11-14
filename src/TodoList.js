import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map(({ id, title }) => (
        <TodoListItem key={id} todo={title} />
      ))}
    </ul>
  );
};
export default TodoList;
