import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function Image (props) {
  return (
    <div id={props.divid}>
       <img className={props.className} id={props.id} {...props}  src={props.src} alt={props.alt} height={props.height} width={props.width}/>
    </div>
   
  );
}


