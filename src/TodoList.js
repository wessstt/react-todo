import React from "react";

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

const TodoList = () => (
  <ul>
    {todoList.map((item) => (
      <li key={item.objectID}>
        <span>{item.title}</span>
      </li>
    ))}
  </ul>
);


export default TodoList;
