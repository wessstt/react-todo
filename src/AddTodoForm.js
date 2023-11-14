import React from "react";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = React.useState([""]);

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
      <label htmlFor="todoTitle"> Title &nbsp; </label>
      <input
        id="todoTitle"
        type="text"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
      />
      &nbsp;
      <button type="submit"> Add </button>
    </form>
  );
};

export default AddTodoForm;
