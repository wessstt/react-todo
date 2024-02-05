import { createRoot } from "react-dom/client";
import App from "./App";
import "./css/index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./css/index.css";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
