import React, { useState } from "react";
import InputWithLabel from "../InputWithLabel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./AddTodoForm.module.css";
import { ReactComponent as List } from "../../svg/list.svg";
import PropTypes from "prop-types";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
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
    onAddTodo(todoTitle);
    setTodoTitle(""); //reset todoTitle to empty String
  };

  return (
    <form className={styles.formContainer} onSubmit={handleAddTodo}>
      <>
        <List className={styles.formIcon} height="30px" width="30px" />
      </>
      <InputWithLabel
        id="todoTitle"
        type="text"
        value={todoTitle}
        onInputChange={handleTitleChange}
        autoFocus
        limit={1}
      ></InputWithLabel>

      <button type="submit" className={styles.buttonAdd}>
        {" "}
        Add{" "}
      </button>
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
    </form>
  );
};

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
