import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import TodoContainer from "./components/TodoContainer.js";
import styles from "./css/TodoContainer.module.css";
import "./css/index.css";
import LandingPage from "./components/LandingPage.js";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <h1>
                <LandingPage />
              </h1>
            }
          />
          <Route path="/wtd-list" element={<TodoContainer />} />
          <Route
            path="/new-wtd-list"
            element={<h1 className={styles.ListTitle}>New List</h1>}
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
