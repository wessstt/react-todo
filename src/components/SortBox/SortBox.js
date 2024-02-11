import React from "react";
import PropTypes from "prop-types";
import styles from "./sortBox.module.css";
import { ReactComponent as Sort } from "../../svg/sort.svg";

const SortBox = ({ isReversed, onIsReversedChange }) => {
  return (
    <div className={styles.SortContainer}>
      <div className={styles.Sort}>Sort :</div>
      <Sort
        height="30px"
        width="30px"
        className={isReversed ? styles.DescSort : styles.AscSort}
        onClick={onIsReversedChange}
      />
    </div>
  );
};

SortBox.propTypes = {
  isReversed: PropTypes.bool.isRequired,
  onIsReversedChange: PropTypes.func.isRequired,
};

export default SortBox;
