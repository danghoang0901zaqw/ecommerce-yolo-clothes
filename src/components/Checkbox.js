import React, { useRef } from "react";

const Checkbox = ({ label, checked, onChange }) => {
  const inputRef = useRef();
  const handleChange = () => {
    if (onChange  ) {
      onChange(inputRef.current);
    }
  };
  return (
    <label className="custom-checkbox">
      <input
        ref={inputRef}
        onChange={handleChange}
        type={"checkbox"}
        checked={checked}
      />
      <span className="custom-checkbox__checkmark  ">
        <i className="bx bx-check"></i>
      </span>
      {label}
    </label>
  );
};

export default Checkbox;
