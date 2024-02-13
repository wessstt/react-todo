import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import TodoContainer from "./components/TodoContainer/TodoContainer.js";
// import styles from "./components/TodoContainer/TodoContainer.module.css";
import "./css/index.css";
import LandingPage from "./components/LandingPage/LandingPage.js";
import NewList from "./components/newList.js";

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
          <Route path="/new-wtd-list" element={<NewList />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
