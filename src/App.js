import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const title = "Todo List";

const App = () => (
  <div style={{ textAlign: "center" }}>
    <header>
      <h1>{title}</h1>
    </header>
    <AddTodoForm />
    <TodoList />
  </div>
);

export default App;
