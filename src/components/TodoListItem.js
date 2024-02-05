import React, { useState } from "react";
import styles from "../css/TodoListItem.module.css";
import { ReactComponent as Delete } from "../svg/delete.svg";
import PropTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  const { title, id } = todo;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <li className={styles.listItem}>
      <div className={styles.listRow}>
        <input
          className={styles.Checkbox}
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />

        <label
          htmlFor={id}
          style={{
            textDecoration: isChecked ? "line-through" : "none",
            color: isChecked ? "#ff715B" : "#a0d2db",
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
      </div>
    </li>
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
