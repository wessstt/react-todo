import React from "react";
import PropTypes from "prop-types";
import styles from "./sortBox.module.css";
import { ReactComponent as Sort } from "../../svg/sort.svg";

const SortBox = ({ isReversed, onIsReversedChange, sortField }) => {
  return (
    <div className={styles.SortContainer}>
      <label className={styles.Sort}>Sort :</label>
      <Sort
        value={sortField}
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
  sortField: PropTypes.string.isRequired,
};

export default SortBox;
