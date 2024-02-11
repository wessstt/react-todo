import React, { useEffect, useState } from "react";
import { ReactComponent as Loading } from "../../svg/loading.svg";
import { ReactComponent as Error } from "../../svg/error.svg";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import TodoList from "../TodoList";
import styles from "./TodoContainer.module.css";
import Navbar from "../Navbar/Navbar";
import fetchAirtableData from "../../utils/fetchAirtableData";
import sortByTitle from "../../utils/sortFilter";
import SortBox from "../SortBox/SortBox";

const todoHeader = "Write That Down";

const GRID_VIEW = "?view=Grid%20view";

const LOCAL_STORAGE_REVERSED_KEY = "todoListIsReversed";
const LOCAL_STORAGE_SORT_BY_KEY = "todoListSortBy";

const Sort = localStorage.getItem(LOCAL_STORAGE_SORT_BY_KEY) ?? "title";
const sortIsReversed =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_REVERSED_KEY)) ?? [];

const TodoContainer = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [sortBy, setSortBy] = useState(Sort);
  const [isReversed, setIsReversed] = useState(sortIsReversed);

  const addTodo = async (newTodo) => {
    const airtableData = {
      fields: {
        title: newTodo,
      },
    };

    try {
      const response = await fetchAirtableData({
        method: "POST",
        body: airtableData,
      });
      setTodoList((newTodoList) => {
        const newList = [
          ...newTodoList,
          {
            id: response.id,
            title: response.fields.title,
          },
        ];
        return sortByTitle(newList, Sort, isReversed);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const removeTodo = async (id) => {
    try {
      const deleteTodo = await fetchAirtableData({
        method: "DELETE",
        url: `/${id}`,
      });
      if (deleteTodo.deleted) {
        setTodoList((lastTodoList) =>
          lastTodoList.filter((todo) => deleteTodo.id !== todo.id)
        );
      }
    } catch (error) {
      console.log(error.message);
      setIsError(true);
    }
  };

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await fetchAirtableData({
          method: "GET",
          url: `${GRID_VIEW}`,
        });
        const todos = response.records.map((todo) => {
          return {
            id: todo.id,
            title: todo.fields.title,
          };
        });
        const sortedTodos = sortByTitle(todos, Sort, sortIsReversed);
        setTodoList(sortedTodos);
        setIsError(false);
      } catch (error) {
        console.log(error.message);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getTodos();
  }, [setTodoList]);

  useEffect(() => {
    setTodoList((lastTodoList) =>
      sortByTitle(lastTodoList, sortBy, isReversed)
    );
    localStorage.setItem(LOCAL_STORAGE_REVERSED_KEY, isReversed);
    localStorage.setItem(LOCAL_STORAGE_SORT_BY_KEY, sortBy);
  }, [isReversed, sortBy]);

  const handleIsReversedChange = (event) =>
    setIsReversed((lastTodoList) => !lastTodoList);

  const handleSort = (event) => {
    const newSortBy = event.target.value;
    setSortBy(newSortBy);
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
            <>
              <SortBox
                height="30px"
                width="30px"
                isReversed={isReversed}
                onIsReversedChange={handleIsReversedChange}
                onSortChange={handleSort}
                sortField={sortBy}
              />
              <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TodoContainer;
