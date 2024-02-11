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
        <Link className={styles.box2} to="/wtd-list">
          List
        </Link>
        <Link className={styles.box3} to="/new-wtd-list">
          New List
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
