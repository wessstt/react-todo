import React, { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const titleHeader = "Todo List";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getDataWithDelay = () =>
    new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            data: { todoList: JSON.parse(localStorage.getItem("key")) ?? [] },
          }),
        2000
      )
    );

  useEffect(() => {
    getDataWithDelay().then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("key", JSON.stringify(todoList));
    }
  }, [isLoading, todoList]);

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

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        )}
      </div>
    </>
  );
};

export default App;
