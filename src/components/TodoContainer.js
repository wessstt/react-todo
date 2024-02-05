import React, { useEffect, useState } from "react";
import { ReactComponent as Loading } from "../svg/loading.svg";
import { ReactComponent as Error } from "../svg/error.svg";
import AddTodoForm from "./AddTodoForm.js";
import TodoList from "./TodoList.js";
import styles from "../css/TodoContainer.module.css";
import Navbar from "./Navbar";

const todoHeader = "Todo List";
const API_BASE_URL = "https://api.airtable.com/v0/";
const AIRTABLE_BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;
const TABLE_NAME = process.env.REACT_APP_TABLE_NAME;
const AIRTABLE_API_TOKEN = process.env.REACT_APP_AIRTABLE_API_TOKEN;

const url = `${API_BASE_URL}${AIRTABLE_BASE_ID}/${TABLE_NAME}`;

const TodoContainer = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchAirtableData = async () => {
    try {
      const options = {
        url,
        method: "GET",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
        },
      };

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
    fetchAirtableData();
  }, []);

  const addTodo = async (newTodo) => {
    const airtableData = {
      url,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
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

  const deleteTodo = async (id) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
      },
    };
    const URL = `${url}/${id}`;
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
      <Navbar />
      <div className={styles.container}>
        <div className={styles.App}>
          <h1 className={styles.ListTitle}>{todoHeader}</h1>
          <AddTodoForm onAddTodo={addTodo} />

          {isError && (
            <p className={styles.Error}>
              {" "}
              <Error height="30px" width="30px" /> &nbsp; Uh oh! Something went
              wrong :(
            </p>
          )}

          {isLoading ? (
            <p className={styles.Loading}>
              <Loading height="30px" width="30px" />
            </p>
          ) : (
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
          )}
        </div>
      </div>
    </>
  );
};

export default TodoContainer;
