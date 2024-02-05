import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import TodoContainer from "./components/TodoContainer.js";
import styles from "./css/TodoContainer.module.css";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoContainer />} />
          <Route
            path="new"
            element={<h1 className={styles.ListTitle}>New List</h1>}
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
