import React, { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const titleHeader = "Todo List";
const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/`;

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    const options = {
      url,
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const todosFromAPI = await response.json();
      const todos = todosFromAPI.records.map((todo) => {
        const newTodo = {
          id: todo.id,
          title: todo.fields.title,
        };
        console.log(todosFromAPI);
        return newTodo;
      });

      setTodoList(todos);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      console.log("Fetching Error:", error.message);
      setIsLoading(false);
      setIsError(true);
      setTodoList([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTodo = async (newTodo) => {
    const airtableData = {
      url,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify({
        fields: {
          title: newTodo.title,
        },
      }),
    };

    try {
      const response = await fetch(url, airtableData);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const dataResponse = await response.json();
      setTodoList((newTodoList) => [
        ...newTodoList,
        {
          id: dataResponse.id,
          title: dataResponse.fields.title,
        },
      ]);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("key", JSON.stringify(todoList));
    }
  }, [isLoading, todoList]);

  //Declare a new function named addTodo that takes newTodo as a parameter
  // const addTodo = (newTodo) => setTodoList([...todoList, newTodo]);

  const deleteTodo = async (id) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };
    const URL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${id}`;
    try {
      const response = await fetch(URL, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const dataResponse = await response.json();
      return dataResponse;
    } catch (error) {
      console.log("Fetching Error:", error.message);
    }
  };

  const removeTodo = (id) => {
    deleteTodo(id);
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>{titleHeader}</h1>
        <AddTodoForm onAddTodo={addTodo} />

        {isError && <p>Uh oh! Something went wrong :(</p>}

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
