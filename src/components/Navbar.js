import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Navbar.module.css";
import { ReactComponent as Logo } from "../svg/WTDlogo.svg";

function Navbar() {
  return (
    <>
      <nav className={styles.wrapper}>
        <Link className={styles.box1} to="/">
          <Logo height="60px" />
        </Link>
        <Link className={styles.box2} to="/wtd-list">
          List
        </Link>
        <Link className={styles.box3} to="/new-wtd-list">
          New List
        </Link>

        {/* <Link target="_blank" to="https://github.com/wessstt">
        About
      </Link>
      <Link
        target="_blank"
        to={"https://airtable.com/apprEm4x6FsoV8D07/pagGJOIUzolVR1X6g/form"}
      >
        Contact
      </Link> */}
      </nav>
    </>
  );
}

export default Navbar;
