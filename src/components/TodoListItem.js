import React, { useState } from "react";
import styles from "../css/TodoListItem.module.css";
import { ReactComponent as Delete } from "../svg/delete.svg";
import PropTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  const { title, id } = todo;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.listContainer}>
      {/* <div className={styles.listRow}> */}
      <li className={styles.listRow}>
        <input
          className={styles.Checkbox}
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />

        <label
          className={styles.listItem}
          htmlFor={id}
          style={{
            textDecoration: isChecked ? "line-through" : "none",
            color: isChecked ? "#ff715B" : "#eaf4f4",
          }}
        >
          {title}
        </label>

        <button
          type="button"
          className={styles.buttonRemove}
          onClick={() => onRemoveTodo(id)}
        >
          <Delete height="25px" width="25px" />
        </button>
      </li>
    </div>
    // </div>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
