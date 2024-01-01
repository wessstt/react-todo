import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
    //console.log(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();

    if (!todoTitle.trim().length) {
      //error popup message
      toast("Please enter a list item.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    //pass an Object instead of a String
    onAddTodo({
      title: todoTitle,
      //id: Date.now(), // place holder to generate unique number
    });
    setTodoTitle(""); //reset todoTitle to empty String
  };

  return (
    <form onSubmit={handleAddTodo}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <InputWithLabel
        id="todoTitle"
        type="text"
        value={todoTitle}
        onInputChange={handleTitleChange}
        autoFocus
      >
        Title:
      </InputWithLabel>
      &nbsp; &nbsp;
      <button type="submit"> Add </button>
    </form>
  );
};

export default AddTodoForm;
