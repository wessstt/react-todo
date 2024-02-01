import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.module.css";

function Navbar() {
  return (
    <nav>
      <Link to="/">Todo List</Link>
      <Link target="_blank" to="https://github.com/wessstt">
        Projects
      </Link>
      <Link
        target="_blank"
        to={"https://airtable.com/apprEm4x6FsoV8D07/pagGJOIUzolVR1X6g/form"}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
