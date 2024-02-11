import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const InputWithLabel = ({
  id,
  type = "text",
  children,
  value,
  isFocused,
  onInputChange,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <>
      <label htmlFor={id}> {children} </label>
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
      />
    </>
  );
};

InputWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.string,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isFocused: PropTypes.bool,
};

export default InputWithLabel;
