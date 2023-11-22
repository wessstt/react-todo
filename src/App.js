import React, { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const titleHeader = "Todo List";

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("key")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

const App = () => {
  const [todoList, setTodoList] = useSemiPersistentState();

  //Declare a new function named addTodo that takes newTodo as a parameter
  const addTodo = (newTodo) => setTodoList([...todoList, newTodo]);

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>{titleHeader}</h1>
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      </div>
    </>
  );
};

export default App;
