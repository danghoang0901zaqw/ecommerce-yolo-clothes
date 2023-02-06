import React from "react";

const Button = (props) => {
  const bg = props.backgroundColor ? `bg-${props.backgroundColor}` : '';
  const size = props.size ? `btn-${props.size}` : '';
  const animate = props.animate ? `btn-animate` : '';
  return (
    <button
      className={`btn ${bg} ${size} ${animate}`}
      onClick={props.onClick ? ()=> props.onClick() : null}
    >
      <span className="btn__txt">{props.children} </span>
      {props.icon && (
        <span className="btn__icon">    
          <i className={`${props.icon} bx-tada`}></i>
        </span>
      )}
    </button>
  );
};

export default Button;
