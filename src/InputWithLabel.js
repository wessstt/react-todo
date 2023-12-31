import React, { useEffect, useRef } from "react";

const InputWithLabel = ({
  id,
  type,
  children,
  value,
  isFocused,
  onInputChange,
}) => {
  const inputRef = useRef();
  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}> {children} </label>
      &nbsp;
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        autoFocus={isFocused}
        onChange={onInputChange}
      />
      &nbsp;
    </>
  );
};

export default InputWithLabel;
