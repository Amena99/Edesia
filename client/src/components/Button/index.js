import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Button (props) {
  return (
    <button type={props.type} id={props.id} data-toggle={props.datatoggle} data-target={props.datatarget}>{props.label}</button>
  );
}

export default Button;
