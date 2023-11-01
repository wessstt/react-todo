import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const title = "Todo List";

const App = () => {
  const [todoList, setTodoList] = useState([""]);

  //Declare a new function named addTodo that takes newTodo as a parameter
  const addTodo = (newTodo) => {
    //console.log(newTodo);
    setTodoList([...todoList, newTodo]);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{title}</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default App;
