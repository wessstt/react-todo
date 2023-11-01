import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map(({ title }) => (
        <TodoListItem todo={title} />
      ))}
    </ul>
  );
};
export default TodoList;
