import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const title = "Todo List";
const App = () => {
  const [newTodo, setNewTodo] = React.useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{title}</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
      <TodoList />
    </div>
  );
};

export default App;
