import React, { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const titleHeader = "Todo List";

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

const App = () => {
  const [todoList, setTodoList] = useSemiPersistentState();
  //Declare a new function named addTodo that takes newTodo as a parameter
  const addTodo = (newTodo) => setTodoList([...todoList, newTodo]);

  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        <h1>{titleHeader}</h1>
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList} />
      </div>
    </React.Fragment>
  );
};

export default App;
