import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { ReactComponent as Logo } from "../../svg/WTDlogo.svg";


function Navbar() {
  return (
    <>
      <nav className={styles.wrapper}>
        <Link className={styles.box1} to="/">
          <Logo height="60px" />
        </Link>
        <Link to="/wtd-list">
          <button className={styles.navLink}>Checklist</button>
        </Link>
        <Link to="/new-wtd-list">
          <button className={styles.navLink}>New List</button>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
