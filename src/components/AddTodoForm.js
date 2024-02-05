import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../css/AddTodoForm.module.css";
import { ReactComponent as List } from "../svg/list.svg";
import PropTypes from "prop-types";

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
      toast.error("Please enter a list item.", {
        position: "top-center",
        autoClose: 2000,
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
      id: "todoTitle",
      //Date.now(), // place holder to generate unique number
    });
    setTodoTitle(""); //reset todoTitle to empty String
  };

  return (
    <form onSubmit={handleAddTodo}>
      <ToastContainer
        limit={1}
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
      <div className={styles.addTodoForm}>
        <InputWithLabel
          className={styles.InputLine}
          id="todoTitle"
          type="text"
          name="title"
          value={todoTitle}
          onInputChange={handleTitleChange}
          autoFocus
          limit={1}
        >
          <List className={styles.List} height="30px" width="30px" />
        </InputWithLabel>

        <button type="submit" className={styles.buttonAdd}>
          {" "}
          Add{" "}
        </button>
      </div>
    </form>
  );
};

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
