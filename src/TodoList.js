import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
  {
    title: "Complete lesson material",
    objectID: 0,
  },
  {
    title: "Complete assignment",
    objectID: 1,
  },
  {
    title: "Submit assignment",
    objectID: 2,
  },
];

const TodoList = () => {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem key={item.objectID} todo={item.title} />
      ))}
    </ul>
  );
};

export default TodoList;
