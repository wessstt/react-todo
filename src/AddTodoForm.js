import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState([""]);

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
    //console.log(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    //pass an Object instead of a String
    onAddTodo({
      title: todoTitle,
      id: Date.now(), // place holder to generate unique number
    });
    setTodoTitle(""); //reset todoTitle to empty String
  };

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        id="todoTitle"
        type="text"
        value={todoTitle}
        onInputChange={handleTitleChange}
        autoFocus
      >
        Title:
      </InputWithLabel>
      &nbsp;
      <button type="submit"> Add </button>
    </form>
  );
};

export default AddTodoForm;
